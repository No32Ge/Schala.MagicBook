/**
 * ComponentLoader.js - V2.1 (Industrial Preview)
 * 高性能、内存安全、依赖追踪的 Web Component 引擎
 */

const componentCache = new Map();

/**
 * 工具：深层对象访问
 */
function getDeepValue(obj, path) {
    if (!path) return undefined;
    const parts = path.split('.');
    let cur = obj;
    for (const p of parts) {
        if (cur == null) return undefined;
        cur = cur[p];
    }
    return cur;
}

function setDeepValue(obj, path, value) {
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
        cur = cur[p];
    }
    cur[parts[parts.length - 1]] = value;
}

/**
 * 阶段 1: 编译器 (Compile Phase)
 * 解析 HTML，提取绑定指令，生成可复用的 Template Element
 */
function compileTemplate(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const templateEl = doc.querySelector('template');
    const styleEl = doc.querySelector('style');
    const scriptEl = doc.querySelector('script');

    // 1. 构造安全的 Template Element (用于后续 clone)
    const wrapperTemplate = document.createElement('template');
    if (styleEl) wrapperTemplate.content.appendChild(styleEl.cloneNode(true));

    // 提取内容源
    const contentSource = templateEl ? templateEl.content : doc.body;

    // 2. 遍历并提取绑定信息
    const bindings = {}; // nodeId -> instructions
    const depMap = {};   // rootKey -> [{ nodeId, instr }]  <-- 核心优化: 依赖映射
    let uidCounter = 0;

    function traverse(node) {
        if (node.nodeType === 1) { // Element
            let hasBinding = false;
            const nodeId = `s-${uidCounter++}`;
            const instructions = [];

            // 扫描所有 s- 开头的属性
            // 注意：我们要倒序遍历属性或复制一份，因为 removeAttribute 会影响遍历
            const attrs = Array.from(node.attributes);
            for (const attr of attrs) {
                const name = attr.name;
                const value = attr.value;

                if (name.startsWith('s-')) {
                    hasBinding = true;
                    let type, prop = value, extra = null;

                    if (name === 's-text') type = 'text';
                    else if (name === 's-html') type = 'html';
                    else if (name === 's-value') type = 'value';
                    else if (name === 's-show') type = 'show';
                    else if (name === 's-model') type = 'model';
                    else if (name.startsWith('s-bind:')) {
                        type = 'bind';
                        extra = name.slice(7); // attr name
                    } else if (name === 's-class') {
                        // 语法支持: s-class="isActive:active-class" 或 s-class="isActive"
                        type = 'class';
                        const parts = value.split(':');
                        prop = parts[0];
                        extra = parts[1] || parts[0]; // className
                    } else if (name.startsWith('s-on')) {
                        type = 'on';
                        const parts = value.split(':');
                        extra = { event: parts[0], method: parts[1] };
                        // s-on 不参与数据依赖更新，单独处理
                    }

                    if (type) {
                        const instr = { type, prop, extra };
                        instructions.push(instr);

                        // 建立依赖图 (skip 'on' and 'model' as they are event listeners)
                        if (type !== 'on' && type !== 'model') {
                            const rootKey = prop.split('.')[0];
                            if (!depMap[rootKey]) depMap[rootKey] = [];
                            depMap[rootKey].push({ nodeId, instr });
                        }
                    }
                    node.removeAttribute(name);
                }
            }

            if (hasBinding) {
                node.setAttribute('data-s-id', nodeId);
                bindings[nodeId] = instructions;
            }
        }

        // 递归子节点
        const children = Array.from(node.childNodes);
        for (const child of children) traverse(child);
    }

    // 处理内容
    // 必须先把 content 克隆一份或者移入 wrapper 再遍历，确保 wrapper 里的是干净的
    // 这里我们先移入 wrapper，再遍历 wrapper.content
    // 注意：如果是 doc.body，需要移动 children
    if (templateEl) {
        wrapperTemplate.content.appendChild(templateEl.content.cloneNode(true));
    } else {
        while (doc.body.firstChild) {
            wrapperTemplate.content.appendChild(doc.body.firstChild);
        }
    }

    traverse(wrapperTemplate.content);

    return {
        templateElement: wrapperTemplate,
        scriptContent: scriptEl ? scriptEl.textContent : null,
        bindings,
        depMap
    };
}

/**
 * 阶段 2: 响应式核心 (Reactor)
 */
function initReactor(shadowRoot, compiled, host) {
    const { bindings, depMap, scriptContent } = compiled;

    // 1. 快速节点查找 (O(1))
    const nodesMap = {};
    shadowRoot.querySelectorAll('[data-s-id]').forEach(node => {
        nodesMap[node.getAttribute('data-s-id')] = node;
    });

    // 2. 状态与方法
    const data = {};
    const methods = {};
    const watchers = {};

    // 3. 批量更新机制 (Batch Update)
    let isPending = false;
    const dirtyKeys = new Set();

    const flushUpdate = () => {
        // 收集需要更新的指令 (去重)
        // nodeId -> Set<instr>
        const nodesToUpdate = new Map();

        dirtyKeys.forEach(key => {
            // 1. 触发 Watchers
            if (watchers[key]) {
                const val = getDeepValue(data, key);
                watchers[key].forEach(cb => cb(val));
            }

            // 2. 收集依赖该 key 的指令
            const dependents = depMap[key] || [];
            dependents.forEach(({ nodeId, instr }) => {
                if (!nodesToUpdate.has(nodeId)) nodesToUpdate.set(nodeId, new Set());
                nodesToUpdate.get(nodeId).add(instr);
            });
        });

        // 执行 DOM 更新
        nodesToUpdate.forEach((instrSet, nodeId) => {
            const node = nodesMap[nodeId];
            if (!node) return;

            instrSet.forEach(instr => {
                const val = getDeepValue(data, instr.prop);
                switch (instr.type) {
                    case 'text': node.textContent = val ?? ''; break;
                    case 'html': node.innerHTML = val ?? ''; break; // [Security Warning] XSS Risk
                    case 'value': node.value = val ?? ''; break;
                    case 'show': node.style.display = val ? '' : 'none'; break;
                    case 'bind': node.setAttribute(instr.extra, val ?? ''); break;
                    case 'class':
                        node.classList.toggle(instr.extra, Boolean(val));
                        break;
                }
            });
        });

        dirtyKeys.clear();
        isPending = false;
    };

    const queueUpdate = (key) => {
        dirtyKeys.add(key);
        if (!isPending) {
            isPending = true;
            queueMicrotask(flushUpdate);
        }
    };

    // 4. Proxy 拦截 (Shallow Proxy + Deep Support)
    const $state = new Proxy(data, {
        get(target, prop) { return target[prop]; },
        set(target, prop, value) {
            if (target[prop] === value) return true;
            target[prop] = value;
            queueUpdate(prop);
            return true;
        }
    });

    // 提供 _set API 支持深层更新
    host._set = (path, val) => {
        if (path.includes('.')) {
            setDeepValue(data, path, val);
            queueUpdate(path.split('.')[0]); // 触发根属性更新
        } else {
            $state[path] = val;
        }
    };

    // 5. 事件绑定与资源管理
    const cleanupFns = []; // 用于销毁时执行

    // 初始化事件绑定
    Object.entries(bindings).forEach(([nodeId, instructions]) => {
        const node = nodesMap[nodeId];
        if (!node) return;

        instructions.forEach(instr => {
            if (instr.type === 'model') {
                const handler = (e) => host._set(instr.prop, e.target.value);
                node.addEventListener('input', handler);
                cleanupFns.push(() => node.removeEventListener('input', handler));
            } else if (instr.type === 'on') {
                const { event, method } = instr.extra;
                const handler = (e) => {
                    if (methods[method]) methods[method](e);
                    else console.warn(`Method [${method}] not found`);
                };
                node.addEventListener(event, handler);
                cleanupFns.push(() => node.removeEventListener(event, handler));
            }
        });
    });

    // 6. 执行用户脚本 (Sandbox-like)
    if (scriptContent) {
        const $emit = (name, detail) => host.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
        const $watch = (key, cb) => {
            if (!watchers[key]) watchers[key] = [];
            watchers[key].push(cb);
        };

        // 注入变量
        const runScript = new Function('$scope', '$host', '$state', '$methods', '$emit', '$watch', '$loader',
            `"use strict";\n${scriptContent}`);

        const tools = { registerComponent, importHtml };

        try {
            runScript(shadowRoot, host, $state, methods, $emit, $watch, tools);
        } catch (err) {
            console.error(`Script Error in <${host.tagName.toLowerCase()}>:`, err);
        }
    }

    // 7. 注册清理函数
    host._cleanup = () => {
        cleanupFns.forEach(fn => fn());
        // 清理 watchers
        for (const k in watchers) delete watchers[k];
        // 断开 observer 在 disconnectedCallback 中处理
    };
}

// --- Exports ---

export async function importHtml(url) {
    if (componentCache.has(url)) {
        return componentCache.get(url).templateElement.content.cloneNode(true);
    }
    const res = await fetch(url);
    const text = await res.text();
    const compiled = compileTemplate(text);
    componentCache.set(url, compiled);
    return compiled.templateElement.content.cloneNode(true);
}

export function registerComponent(tagName, url) {
    if (customElements.get(tagName)) return;

    class CustomComponent extends HTMLElement {
        constructor() { super(); this.attachShadow({ mode: 'open' }); }

        async connectedCallback() {
            if (this.shadowRoot.firstChild) return; // 避免重复初始化

            try {
                let compiled = componentCache.get(url);
                if (!compiled) {
                    const res = await fetch(url);
                    const text = await res.text();
                    compiled = compileTemplate(text);
                    componentCache.set(url, compiled);
                }

                // 安全克隆
                this.shadowRoot.appendChild(compiled.templateElement.content.cloneNode(true));

                // 初始化 Reactor
                initReactor(this.shadowRoot, compiled, this);

                // 属性监听 (Props Down)
                this.observer = new MutationObserver((mutations) => {
                    mutations.forEach(m => {
                        if (m.type === 'attributes') {
                            // 自动同步 attr -> state
                            this._set(m.attributeName, this.getAttribute(m.attributeName));
                        }
                    });
                });
                this.observer.observe(this, { attributes: true });

                // 初始属性同步
                Array.from(this.attributes).forEach(attr => {
                    this._set(attr.name, attr.value);
                });

                this.dispatchEvent(new Event('loaded'));

            } catch (e) {
                console.error(`Load failed: ${url}`, e);
                this.shadowRoot.innerHTML = `<div style="color:red">Error</div>`;
            }
        }

        disconnectedCallback() {
            if (this._cleanup) this._cleanup();
            if (this.observer) this.observer.disconnect();
        }
    }
    customElements.define(tagName, CustomComponent);
}
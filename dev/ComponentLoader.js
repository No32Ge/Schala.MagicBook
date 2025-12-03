/**
 * ComponentLoader.js - 全能组件加载器
 */

const templateCache = new Map();

// --- 响应式核心 (Model-View-Binder) ---
function initReactiveSystem(shadowRoot, userScriptContent, host) {
    const bindings = {};
    const data = {};

    const updateView = (key, value) => {
        if (!bindings[key]) return;
        bindings[key].forEach(node => {
            if (node.hasAttribute('s-text')) node.textContent = value;
            if (node.hasAttribute('s-value')) node.value = value;
            if (node.hasAttribute('s-show')) node.style.display = value ? '' : 'none';
            // [约定] s-class: 动态切换 class (true加, false删)
            if (node.hasAttribute('s-class')) {
                const className = node.getAttribute('s-class');
                value ? node.classList.add(className) : node.classList.remove(className);
            }
        });
    };

    const $state = new Proxy(data, {
        get(target, prop) { return target[prop]; },
        set(target, prop, value) {
            target[prop] = value;
            updateView(prop, value);
            return true;
        }
    });

    const scanDOM = () => {
        const allNodes = shadowRoot.querySelectorAll('*');
        allNodes.forEach(node => {
            ['s-text', 's-value', 's-show', 's-class'].forEach(attr => {
                if (node.hasAttribute(attr)) {
                    const key = node.getAttribute(attr);
                    if (!bindings[key]) bindings[key] = [];
                    bindings[key].push(node);
                }
            });
            if (node.hasAttribute('s-model')) {
                const key = node.getAttribute('s-model');
                if (!bindings[key]) bindings[key] = [];
                bindings[key].push(node);
                node.addEventListener('input', (e) => $state[key] = e.target.value);
            }
            if (node.hasAttribute('s-on')) {
                const [event, method] = node.getAttribute('s-on').split(':');
                node.addEventListener(event, (e) => {
                    if ($state[method]) $state[method](e);
                });
            }
        });
    };

    scanDOM();

    if (userScriptContent) {
        // [约定] 将 importHtml 和 registerComponent 注入给组件脚本使用
        const tools = { registerComponent, importHtml };
        const runScript = new Function('$scope', '$host', '$loader', '$state', userScriptContent);
        runScript(shadowRoot, host, tools, $state);
    }
}

// --- HTML 解析器 ---
function createNodeFromHtml(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const template = doc.querySelector('template');
    const style = doc.querySelector('style');
    const script = doc.querySelector('script');

    const fragment = document.createDocumentFragment();
    if (style) fragment.appendChild(style.cloneNode(true));
    // 支持纯 HTML 模板（没有 template 标签的情况自动兼容）
    if (template) {
        fragment.appendChild(template.content.cloneNode(true));
    } else {
        // 如果用户没写 template 标签，直接取 body 内容
        Array.from(doc.body.children).forEach(child => fragment.appendChild(child));
    }
    
    fragment._scriptContent = script ? script.textContent : null;
    return fragment;
}

// --- 导出方法 1: 导入原生 HTML 节点 ---
export async function importHtml(url) {
    if (templateCache.has(url)) return createNodeFromHtml(templateCache.get(url));
    const res = await fetch(url);
    const text = await res.text();
    templateCache.set(url, text);
    // 注意：importHtml 返回的是 Fragment，脚本需要调用方手动处理，
    // 或者我们在这里简单处理：如果有脚本，立即在 "global" 作用域或者 临时作用域执行
    // 为了简单演示，importHtml 主要用于静态片段，若包含脚本建议使用 Web Component
    return createNodeFromHtml(text);
}

// --- 导出方法 2: 注册 Web Component ---
export function registerComponent(tagName, url) {
    if (customElements.get(tagName)) return;

    class CustomComponent extends HTMLElement {
        constructor() { super(); this.attachShadow({ mode: 'open' }); }
        async connectedCallback() {
            if (this.shadowRoot.innerHTML) return;
            try {
                let htmlText = templateCache.get(url);
                if (!htmlText) {
                    const res = await fetch(url);
                    htmlText = await res.text();
                    templateCache.set(url, htmlText);
                }
                const fragment = createNodeFromHtml(htmlText);
                const scriptContent = fragment._scriptContent;
                this.shadowRoot.appendChild(fragment);
                initReactiveSystem(this.shadowRoot, scriptContent, this);
                this.dispatchEvent(new Event('loaded'));
            } catch (e) {
                console.error(`Error loading ${tagName}:`, e);
            }
        }
    }
    customElements.define(tagName, CustomComponent);
}
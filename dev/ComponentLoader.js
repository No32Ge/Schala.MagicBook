const templateCache = new Map();

// --- 1. 响应式系统 (增加了 props 同步机制) ---
function initReactiveSystem(shadowRoot, userScriptContent, host) {
    const bindings = {};
    const data = {};

    // 视图更新器
    const updateView = (key, value) => {
        if (!bindings[key]) return;
        bindings[key].forEach(node => {
            if (node.hasAttribute('s-text')) node.textContent = value;
            if (node.hasAttribute('s-value')) node.value = value;
            if (node.hasAttribute('s-show')) node.style.display = value ? '' : 'none';
            // [新增] s-bind:attr 绑定属性给子元素 (父传子基石)
            // 例如: <child-comp s-bind:user="currentUser">
            Array.from(node.attributes).forEach(attr => {
                if (attr.name.startsWith('s-bind:')) {
                    const targetAttr = attr.name.replace('s-bind:', '');
                    // 如果值变了，更新目标元素的属性
                    node.setAttribute(targetAttr, value);
                }
            });
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

    // 扫描 DOM
    const scanDOM = () => {
        const allNodes = shadowRoot.querySelectorAll('*');
        allNodes.forEach(node => {
            // 基础绑定 s-text, s-show, s-model
            ['s-text', 's-value', 's-show', 's-model'].forEach(attr => {
                if (node.hasAttribute(attr)) {
                    const key = node.getAttribute(attr);
                    if (!bindings[key]) bindings[key] = [];
                    bindings[key].push(node);
                    
                    // s-model 输入监听
                    if (attr === 's-model') {
                        node.addEventListener('input', (e) => $state[key] = e.target.value);
                    }
                }
            });

            // [新增] 扫描 s-bind:xxx (父组件绑定数据给子组件)
            Array.from(node.attributes).forEach(attr => {
                if (attr.name.startsWith('s-bind:')) {
                    const key = attr.value; // 绑定的变量名
                    if (!bindings[key]) bindings[key] = [];
                    bindings[key].push(node);
                }
            });

            // 事件监听 s-on
            if (node.hasAttribute('s-on')) {
                const [event, method] = node.getAttribute('s-on').split(':');
                node.addEventListener(event, (e) => {
                    // [新增] 支持 $emit 发送自定义事件
                    const $emit = (name, detail) => {
                        host.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
                    };
                    if ($state[method]) $state[method](e, { $emit });
                });
            }
        });
    };

    scanDOM();

    // 暴露 update 接口给 host，让外部能更新内部 state
    host._updateState = (key, value) => {
        $state[key] = value;
    };

    if (userScriptContent) {
        const tools = { registerComponent, importHtml };
        // 注入 $emit 方便在脚本里直接调用
        const $emit = (name, detail) => host.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
        const runScript = new Function('$scope', '$host', '$loader', '$state', '$emit', userScriptContent);
        runScript(shadowRoot, host, tools, $state, $emit);
    }
}

// ... importHtml 和 createNodeFromHtml 保持不变 ...
export async function importHtml(url) { /*...*/ return createNodeFromHtml(/*...*/); }
function createNodeFromHtml(htmlText) { /*...*/ }

// --- 2. 注册组件 (支持属性监听) ---
export function registerComponent(tagName, url) {
    if (customElements.get(tagName)) return;

    class CustomComponent extends HTMLElement {
        constructor() { super(); this.attachShadow({ mode: 'open' }); }

        // [关键升级] 监听所有属性变化
        // 这里为了偷懒，我们不指定 observedAttributes，而是使用 MutationObserver
        // 这样任何属性变了，我们都尝试去更新内部 state
        async connectedCallback() {
            if (this.shadowRoot.innerHTML) return;

            // 加载模板
            let htmlText = templateCache.get(url);
            if (!htmlText) {
                const res = await fetch(url);
                htmlText = await res.text();
                templateCache.set(url, htmlText);
            }
            // ... 解析逻辑同之前 ...
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const template = doc.querySelector('template');
            const style = doc.querySelector('style');
            const script = doc.querySelector('script');
            
            if(style) this.shadowRoot.appendChild(style.cloneNode(true));
            if(template) this.shadowRoot.appendChild(template.content.cloneNode(true));

            // 初始化系统
            initReactiveSystem(this.shadowRoot, script ? script.textContent : null, this);

            // [关键升级] 启动属性观察器 (Props Down)
            // 当外部执行 <my-comp name="NewVal"> 时，自动同步内部 $state.name = "NewVal"
            this.observer = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'attributes') {
                        const name = mutation.attributeName;
                        const value = this.getAttribute(name);
                        // 调用内部的更新方法
                        if (this._updateState) this._updateState(name, value);
                    }
                });
            });
            this.observer.observe(this, { attributes: true });

            // [初始化属性] 把当前标签上的初始属性同步进 state
            Array.from(this.attributes).forEach(attr => {
                if (this._updateState) this._updateState(attr.name, attr.value);
            });
            
            this.dispatchEvent(new Event('loaded'));
        }

        disconnectedCallback() {
            if (this.observer) this.observer.disconnect();
        }
    }
    customElements.define(tagName, CustomComponent);
}
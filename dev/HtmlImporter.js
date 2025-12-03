// HtmlImporter.js

export async function importHtml(url) {
    try {
        // 1. 获取资源
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}`);
        const text = await res.text();

        // 2. 解析 HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const templateEl = doc.querySelector('template');
        const styleEl = doc.querySelector('style');
        const scriptEl = doc.querySelector('script');

        // 3. 创建宿主节点 (这个就是最后返回给你的那个节点)
        const host = document.createElement('div');
        host.style.display = 'contents'; // 布局优化，让宿主本身不影响布局

        // 4. 开启 Shadow DOM (实现样式和逻辑隔离)
        const shadow = host.attachShadow({ mode: 'open' });

        // 5. 注入样式
        if (styleEl) {
            shadow.appendChild(styleEl.cloneNode(true));
        }

        // 6. 注入结构
        if (templateEl) {
            shadow.appendChild(templateEl.content.cloneNode(true));
        }

        // 7. 注入并执行逻辑 (核心步骤)
        // 我们创建一个闭包，将 shadowRoot 作为 $scope 传入
        // 这样脚本里只能操作自己的 DOM，不会污染外面
        if (scriptEl) {
            const code = scriptEl.textContent;
            const runScript = new Function('$scope', '$host', code);
            // $scope: 组件内部的 document
            // $host: 组件外部的那个 div
            runScript(shadow, host);
        }

        return host;

    } catch (err) {
        console.error('Import Error:', err);
        const errorNode = document.createElement('div');
        errorNode.innerText = `组件加载失败: ${url}`;
        return errorNode;
    }
}

(async function () {
    // 1. 拉取远程版本号（强制不缓存）
    let remoteConfig = null;
    try {
        const res = await fetch(`/version.json?t=${Date.now()}`);
        remoteConfig = await res.json();
    } catch (e) {
        console.warn("version.json 加载失败");
    }
    if (!remoteConfig) return;

    const localVersion = localStorage.getItem('appVersion');

    // 2. 注册 SW
    if (!('serviceWorker' in navigator)) return;

    try {
        const reg = await navigator.serviceWorker.register('/service-worker.js');

        // 封装：向 SW 发送配置
        function sendConfig() {
            if (reg.active) {
                reg.active.postMessage({
                    type: 'SET_CONFIG',
                    payload: remoteConfig
                });
            }
        }
        // 情况 1：SW 一开始就已经 active
        if (reg.active) sendConfig();

        // 情况 2：SW 还没 active（安装中）
        reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'activated') {
                    sendConfig();
                    // 只在 SW 激活时 reload 一次
                    location.reload();
                }
            });
        });

        // 3. 版本号对比（只触发一次 reload）
        if (remoteConfig.version !== localVersion) {
            console.log(`Version updated: ${localVersion} -> ${remoteConfig.version}`);
            localStorage.setItem('appVersion', remoteConfig.version);
            // 给 SW 留时间处理消息
            setTimeout(() => location.reload(), 300);
        }

    } catch (error) {
        console.error('SW registration failed:', error);
    }
})();
let CONFIG = {
  version: null,
  cacheList: []
};

// 当前版本缓存名
function cacheName(version) {
  return `app-cache-${version}`;
}

// 接收配置
self.addEventListener('message', async (event) => {
  if (event.data?.type !== 'SET_CONFIG') return;

  const { version, cacheList } = event.data.payload;

  // 第一次设置 or 版本变更
  if (version !== CONFIG.version) {
    console.log(`SW: version update ${CONFIG.version} -> ${version}`);

    // 更新本地配置
    CONFIG.version = version;
    CONFIG.cacheList = cacheList || [];

    const newCache = await caches.open(cacheName(version));

    // 预缓存核心文件
    if (CONFIG.cacheList.length > 0) {
      await newCache.addAll(CONFIG.cacheList);
    }

    // 删除旧缓存（只删其它版本）
    const keys = await caches.keys();
    await Promise.all(
      keys.map((key) => {
        if (key !== cacheName(version)) {
          return caches.delete(key);
        }
      })
    );

    self.skipWaiting();
  }
});

// install
self.addEventListener('install', () => {
  console.log('SW installed');
  self.skipWaiting();
});

// activate
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// fetch
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith((async () => {
    // 未初始化 version.json 时，无缓存模式
    if (!CONFIG.version) return fetch(req);

    const cache = await caches.open(cacheName(CONFIG.version));

    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const res = await fetch(req);
      if (res.status === 200 && (req.url.startsWith('http://') || req.url.startsWith('https://'))) {
        cache.put(req, res.clone());
      }
      return res;
    } catch {
      // 离线 fallback
      if (req.destination === 'document') {
        return cache.match('/mb/b21/index.html');
      }
      throw error;
    }
  })());
});

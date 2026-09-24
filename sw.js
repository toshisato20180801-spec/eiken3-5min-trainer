self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));await self.registration.unregister();const cs=await self.clients.matchAll();for(const c of cs)c.navigate(c.url)})()));
self.addEventListener('fetch',()=>{});
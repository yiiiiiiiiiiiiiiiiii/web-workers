const CACHE_NAME = "v1";
const URLS_TO_CACHE = ["/cache_data.json"];

// install 事件, 会在第一次安装时触发
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// 激活事件， 会在浏览器打开新的标签页或窗口时触发
self.addEventListener("activate", (event) => {});

// 拦截请求事件， 所有请求都会经过这里
self.addEventListener("fetch", async (event) => {
  try {
    const response = await caches.match(event.request.url);

    if (response) {
      return response;
    }

    return fetch(event.request);
  } catch (error) {
    console.log("ServiceWorker 请求发生错误：" + event.data);
  }
});

// message 事件， 用于接收来自主线程的消息
self.addEventListener("message", (event) => {
  console.log("收到来自主线程的消息：", event.data);
  console.log("5s 后向主线程发送消息");
  setTimeout(() => {
    // 向主线程发送消息
    const d = { id: event.data.id + 1 };
    console.log("向主线程发送消息：", d);
    event.source.postMessage(d);
  }, 5000);
});

### Worker 用法练习

#### Web Workers

Web Worker 是一种在浏览器中运行的脚本，使你能够在主线程之外的线程中执行 JavaScript 代码。这样可以避免页面因计算密集型任务而变得无响应，从而提升用户体验。Web Worker 的主要功能包括：

多线程并发执行
Web Workers 允许你在后台线程中执行任务，而主线程可以继续处理用户界面和其他事件。这对于处理大规模计算、文件处理、数据处理等任务特别有用。

防止界面锁定
由于 JavaScript 是单线程的，如果在主线程上执行耗时的计算，可能导致用户界面卡顿或无响应。通过将这些耗时的操作放在 Web Worker 中运行，可以避免这种情况。

适合长时间运行的任务
Web Workers 可以处理长时间运行的任务，比如图像处理、数据分析等，而不会影响网页的响应能力。

支持异步通讯
Worker 和主线程之间通过 postMessage() 方法进行通讯。主线程可以向 Worker 发送消息，Worker 可以通过 onmessage 事件处理函数接收这些消息并返回结果。

与 DOM 交互的限制
Web Worker 运行在一个与主线程隔离的环境中，因此无法直接访问 DOM。这避免了数据竞争的情况，提高了代码的可靠性。

测试项目描述：
通过使用 10 个 web worker 并发计算、和 js 主线程来计算 10 次 fibonacci(40)数列，并比较两种方法的运行时间。

启动测试 Demo：

```
npm run start:web
```

在浏览器中访问 `http://localhost:3000/` 即可看到 Demo 页面。

#### Shared Worker

共享实例：
与普通的 Worker 不同，Shared Worker 可以被多个浏览器窗口或标签页同时使用。只要同一源的不同上下文都连接到相同的 Shared Worker，它们就可以借助这个实例进行通讯。

跨上下文通讯：
Shared Worker 允许不同的页面或标签之间进行消息交换。通过互相发送消息，页面可以共享一定的数据和状态信息，共同实现某些功能。

长时间运行：
Shared Worker 可以持久运行，不像普通的 Worker 一样在每个页面加载时都需要重新创建。这种持久性使得它在处理长时间计算或维持连接等操作时非常有用。

生命周期管理：
Shared Worker 的生命周期与普通的 Worker 不同。它只有在至少有一个连接时才会存在，当所有连接都关闭后，它才会被终止。

测试项目描述：
index.html 页面 和 iframe.html 页面都使用了 Service Worker，它们都使用了 Shared Worker。通过点击按钮，可以向 Shared Worker 发送消息，Shared Worker 向 Service Worker 发送消息，Service Worker 向 index.html 页面发送消息，index.html 页面向 iframe.html 页面发送消息。

启动测试 Demo：

```
npm run start:shared
```

在浏览器中访问 `http://localhost:3000/` 即可看到 Demo 页面。

#### Service Worker

离线体验：Service Worker 可以缓存资源，当用户在离线状态下访问时，能够提供基本的页面和功能。例如，用户可以在没有网络的情况下查看之前访问过的页面。

缓存管理：可以对静态资源（如图片、样式表、脚本等）进行缓存，从而加快页面加载速度，提高用户体验。在新的资源版本发布时，可以管理缓存，确保用户获取到最新的资源。

推送通知：通过 Service Worker，网站可以实现推送通知功能，即使用户没有打开网页，也能接收到来自网站的消息。这对于增加用户参与度非常重要。

后台同步：Service Worker 允许在网络恢复时自动同步数据。例如，在用户离线时提交的表单数据，可以在用户重新连接网络后自动发送到服务器。

改善性能：使用 Service Worker 可以优化性能，如实现智能的资源预缓存，减少网络请求的延迟，提高页面加载速度。

单页应用：在单页应用（SPA）中，Service Worker 可以帮助管理路由和数据缓存，使得用户在不同视图之间切换时更加流畅。

测试项目描述：
通过使用 Service Worker 缓存静态资源，并在用户离线时提供基本的页面和功能。

启动测试 Demo：

```
npm run start:service
```

在浏览器中访问 `http://localhost:3000/` 即可看到 Demo 页面，通过控制台查看执行情况。

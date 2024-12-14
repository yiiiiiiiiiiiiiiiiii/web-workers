importScripts("fibonacci.js");

self.addEventListener("message", function (e) {
  const n = e.data;
  const result = fibonacci(n);
  self.postMessage(result);
});

# beacon

诸如`sendBeacon()`和`requestIdleCallback()`这样的 API 是专门为运行不会阻塞用户关键任务的非关键任务而设计的。

## 为什么不简单地使用 Fetch API？

您可能会想在页面卸载时（在页面关闭之前）使用旧的 Fetch API 甚至 XMLHttpRequest 来发送大量数据。

但这风险太大，因为您可能会丢失一些数据，从而丢失一些宝贵的分析信息，尤其是在大型请求上，因为您无法保证在页面卸载之前成功发送请求。

因此，您可能希望记录和发送可能要注册并发送到分析服务器的每个事件的数据。

但这是客户端为每个事件（尤其是页面滚动或鼠标位置记录等事件）发送的大量请求。

另外，您不知道客户端何时会突然关闭浏览器，并且可能会丢失一些数据上下文。

相反，您可以收集数据并在页面卸载时发送它们，因为此 API 在使用后会在后台运行，以便客户端可以安全地退出页面，并且您仍将收到用于分析目的的数据。

这使得验证数据的工作更容易，因为一个客户端会话等于发送一个信标.

而且，信标在设计上不需要任何响应，而 Fetch API 会，因此这使得它们快速且非常适合发送分析数据。

## References

- <https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon>
- <https://web.dev/vitals-field-measurement-best-practices/#%E4%BD%BF%E7%94%A8%E9%9D%9E%E9%98%BB%E5%A1%9E-api>
- <https://developer.mozilla.org/zh-CN/docs/Web/API/Beacon_API>
- <https://developer.chrome.com/blog/send-beacon-data-in-chrome-39/>
- <http://ebidel.github.io/beacon-send/components/beacon-send/>

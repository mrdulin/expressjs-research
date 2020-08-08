# http-basic-auth

## 介绍

HTTP Basic authentication 虽然十分简单，但仍有一些需要注意的地方:

- 用户名和密码在每次请求时都会被带上，即使请求是通过安全连接发送的，这也是潜在的可能暴露它们的地方。

- 如果网站使用的加密方法十分弱，或者被破解，那么用户名和密码将会马上泄露。

- 用户通过这种方式进行验证时，并没有登出的办法

- 同样，登陆超时也是没有办法做到的，你只能通过修改用户的密码来模拟。

## 参考

- HTTP 基本认证 https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81
- web 权限验证方法说明 https://segmentfault.com/a/1190000004086946
- https://github.com/jshttp/basic-auth

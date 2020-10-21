# pushgateway

推送指标

```bash
node ./index.js
```

查看应用程序推送到 pushgateway 的指标

在 prometheus http://localhost:9090/graph 页面中执行 query: `dummy_prefix_name_test`，可以看到 prometheus 作业从 pushgateway 端点抓取到的指标

通过 curl 获取 pushgateway 上的指标，并且将输出格式化为 json 格式

```bash
curl -X GET http://localhost:9091/api/v1/metrics | python -m json.tool
```

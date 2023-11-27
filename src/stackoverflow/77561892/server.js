const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
	'/api/v2',
	createProxyMiddleware({
		target: 'https://jsonplaceholder.typicode.com',
		pathRewrite: {
			'^/api/v2': '',
		},
		changeOrigin: true,
		onProxyRes: (proxyRes, req, res) => {
			console.log('proxy res here =====');
			proxyRes.headers['x-added'] = 'foobar';
		},
	}),
);

// 启动服务器
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

function sendToAnalytics({ name, value, id }) {
	const body = JSON.stringify({ name, value, id });
	// 可以的话，使用 `navigator.sendBeacon()`, 回退到 `fetch()`.
	(navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
		fetch('/analytics', { body, method: 'POST', keepalive: true });
}

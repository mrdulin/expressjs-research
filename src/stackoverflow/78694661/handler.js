async function handler(event) {
	if (event.a) await doBusinessLogicA(event);
	else await doBusinessLogicB(event);

	return 'response';
}

async function doBusinessLogicA(event) {
	console.log('real implementation');
}
async function doBusinessLogicB(event) {
	console.log('real implementation');
}

module.exports = { handler };

const rewire = require('rewire');
const sinon = require('sinon');

it('isValidTopic should return false', () => {
	const topics = [{ topicId: 'topic 1' }, { topicId: 'topic 2' }];
	const requiredTopic = ['topic 9'];

	const Topics = rewire('./Topics.js');
	Topics.__set__('someGlobalVariable', 'Hello!');

	const topicsInstance = new Topics();
	const isValid = topicsInstance.isValidTopic(topics, requiredTopic);
	sinon.assert.match(isValid, false);
});

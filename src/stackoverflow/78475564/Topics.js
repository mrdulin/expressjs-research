let someGlobalVariable;
class Topics {
	constructor() {
		console.log('someGlobalVariable: ', someGlobalVariable);
	}

	isValidTopic(topics, requiredTopic) {
		let topicFound = false;
		requiredTopic.filter((topic) => {
			if (topics.includes(requiredTopic.topicId)) {
				topicFound = true;
			}
		});
		return topicFound;
	}
}

module.exports = Topics;

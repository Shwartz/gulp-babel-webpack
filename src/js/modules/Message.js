class Message {

	constructor(text) {
		this.text = text || 'Very Default Text';
	}

	say(text) {
		console.log('MESSAGE MODULE - Your message: ', text || this.text);
		return 'this is message';
	}
}

export default Message;
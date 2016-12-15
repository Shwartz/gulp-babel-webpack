class Message {
	constructor (msg) {
		this.msg = msg || 'vau';
	}

	say(msg) {
		console.log('msg: ', msg);
	}
}

export default Message;

class Message {
	constructor (msg) {
		this.msg = msg;
	}

	say() {
		console.log('msg: ', msg);
	}
}

export default Message;

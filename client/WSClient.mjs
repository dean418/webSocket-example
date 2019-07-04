export class WSClient {
	constructor(host) {
		this.socket = new WebSocket(host);

		this.socket.onopen = this.onOpen;
		this.socket.onmessage = this.onMessage;
		this.socket.onerror = this.onError;
		this.socket.onclose = this.onClose;
	}

	sendMessage(message) {
		let json = JSON.stringify({message});
		this.socket.send(json);
	}

	onOpen() {
		console.log('opened connection to server');
	}

	onMessage(message) {
		console.log(message.data);
	}

	onError(err) {
		console.log(err);
	}

	onClose(code, reason) {
		console.log(code, reason);
	}
}
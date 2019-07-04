import {WSClient} from './WSClient.mjs';

let form = document.getElementById('form');
let input = document.getElementById('input');

let ws = new WSClient('ws://localhost:8080');

form.onsubmit = (event) => {
	event.preventDefault();
	let message = input.value;
	ws.sendMessage(message);
}
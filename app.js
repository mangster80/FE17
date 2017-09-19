const url = 'http://localhost:8081';

function clearMessages() {
const ul = document.getElementById('message-list');
ul.innerHTML = '';
}

function addMessagesToDOM(msgs) {
const ul = document.getElementById('message-list');

for (let i = 0; i < msgs.length; i++) {
const li = document.createElement('li');
li.appendChild(document.createTextNode(msgs[i]));
ul.appendChild(li);
}
}

function getMessages() {
const req = new XMLHttpRequest();

req.onreadystatechange = function () {
if (req.readyState === XMLHttpRequest.DONE) {
const parsedMessages = JSON.parse(req.responseText);
clearMessages();
addMessagesToDOM(parsedMessages);
}
}

req.open('GET', url);
req.send();
}

function sendMessage() {
const newMsg = document.getElementById('new-message').value;

const req = new XMLHttpRequest();
req.open('POST', url);
req.send(newMsg);
}

setInterval(getMessages, 2000);

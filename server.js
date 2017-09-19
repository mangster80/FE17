const http = require('http');
const port = 8081;

let messages = [];

function requestHandler (req, response) {
response.setHeader('Access-Control-Allow-Origin', '*');
if (req.method === 'GET') {
response.setHeader('Content-Type', 'application/JSON');
response.end(JSON.stringify(messages));
} else if (req.method === 'POST') {
req.setEncoding('utf-8');
req.on('data', function (data) {
messages.push(data);
}); //Saves the posted data to messages
response.end();
}
};

const server = http.createServer(requestHandler);

server.listen(port);

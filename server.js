var http = require('http');

function onRequest(request, response) {
  console.log('Request received.');
  response.writeHead(200, {'Content-Type': 'Text/Plain'});
  response.write('Hello World!');
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');

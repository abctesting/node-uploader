var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'Text/Plain'});
  response.write('Hello World!');
  response.end();
}).listen(8888);

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Namaskāram</h1>');
}).listen(process.env.PORT || 8080);

console.log('Server running on port', process.env.PORT || 8080);

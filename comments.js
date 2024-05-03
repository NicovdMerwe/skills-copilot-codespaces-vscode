// create web server that listens to port 3000
// when a user sends a request to the server, the server should respond with the content of the comments.json file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if(err) {
      res.writeHead(500);
      res.end('An error occurred on the server.');
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
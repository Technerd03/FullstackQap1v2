//The http module provides functionality to create HTTP servers and make HTTP requests.
//Example:
const http = require('http');


// Define a basic HTTP server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send a response to the client
  res.end('Hello World\n');
});


// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
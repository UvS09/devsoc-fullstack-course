const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Incoming request:', req.method, req.url);

  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('<h1>Home Page</h1>');
  }

  if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('<h1>About Page</h1>');
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>Page Not Found</h1>');
});

server.listen(3000,()=>console.log("✅ Server running at http://localhost:3000"));

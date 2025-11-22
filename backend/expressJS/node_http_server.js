const http = require('http'); // import http

const server = http.createServer((req, res) => { // create server
  console.log('Incoming request:', req.method, req.url); // log request

  if (req.url === '/favicon.ico') { // ignore favicon
    res.writeHead(204);
    return res.end();
  }

  if (req.url === '/' && req.method === 'GET') { // home route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('<h1>Home Page</h1>');
  }

  if (req.url === '/about' && req.method === 'GET') { // about route
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('<h1>About Page</h1>');
  }

  res.writeHead(404, { 'Content-Type': 'text/html' }); // fallback route
  res.end('<h1>Page Not Found</h1>');
});

server.listen(3000,()=>console.log("✅ Server running at http://localhost:3000")); // start http server

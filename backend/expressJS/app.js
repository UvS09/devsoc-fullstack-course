const http = require("http"); // import http module

const server = http.createServer((req,res)=>{ // create server
    console.log("Incoming request", req.method, req.url); // log request

    if(req.url==='/favicon.ico'){ // ignore favicon
        res.writeHead(204); 
        return res.end();
    }

    if(req.url==='/' && req.method==='GET'){ // handle home route
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end('<h1>Home page</h1');
    }

    if(req.url==='/about' && req.method==='GET'){ // handle about route
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end('<h1>About page</h1');
    }
});

server.listen(8000, ()=>console.log("SERVER IS RUNNING")); // start server

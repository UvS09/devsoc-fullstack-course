const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Incoming request", req.method, req.url);

    if(req.url==='/favicon.ico'){
        res.writeHead(204);
        return res.end();
    }

    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end('<h1>Home page</h1');
    }
        if(req.url==='/about' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end('<h1>About page</h1');
    }
    
});

server.listen(8000, ()=>console.log("SERVER IS RUNNING"));
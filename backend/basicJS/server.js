const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello');
}).listen(8080);
console.log("Welcome to your new server");

const express = require('express'); // import express
const app = express(); // init app
const PORT = 3000; // port number

app.get('/text', (req,res)=>{ // text response route
    res.send("Hello, welcome to your express server");
})

app.get('/json',(req,res)=>{ // json response route
    res.json({
        message: 'This is JSON',
        status: 'Sucess',
        data:{
            name: 'Swaraj',
            age: '20',
            course:'eie'
        }
    });
});

app.get('/status',(req,res)=>{ // send status code
    res.status(200).send('Everything is OK');
});

app.listen(3000, ()=>{ // start server
    console.log("SERVER IS RUNNING");
})

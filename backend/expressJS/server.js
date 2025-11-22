const express = require('express');
const app = express();
const PORT = 3000;

app.get('/text', (req,res)=>{
    res.send("Hello, welcome to your express server");
})

app.get('/json',(req,res)=>{
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

app.get('/status',(req,res)=>{
    res.status(200).send('Everything is OK');
});
app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING");
})

const express = require("express"); // import express
const app = express(); // init app

app.get('/search', (req,res)=> { // search route
    const query = req.query.q; // get query param
    res.send(`You searched for : ${query}`);
});

app.get('/filter',(req,res)=>{ // filter route
    const category = req.query.category; // read params
    const price = req.query.price;
    res.json({
        message: 'Filter',
        price: 3000, // sample data
        category: 'Man',
        color: 'Blue'
    });
});

app.listen(3000, ()=>{ // start server
    console.log("SERVER IS RUNNING");
})

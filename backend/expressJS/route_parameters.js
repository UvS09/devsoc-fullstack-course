const express = require("express"); // import express
const app = express(); // init app

// basic parameter route
app.get('/user/:username',(req,res)=>{
    const username = req.params.username; // extract param
    res.send(`Welcome, ${username}`);
});

// nested route params
app.get('/user/:username/post/:postID', (req,res)=>{
    const username = req.params.username; // user
    const postID = req.params.postID; // post id
    res.send(`User: ${username}, PostID: ${postID}`);
});

// filter with query params
app.get('/filter',(req,res)=>{
    const department = req.query.department; // dept filter
    const year = req.query.year; // year filter
    res.json({
        message:"Kaam hogya",
        department: department || 'All departments', // default
        year: year || 'All years',
        results:[
            {id:1, name: 'Swaraj'},
            {id:2, name: 'Dhruvin'}
        ]
    });
});

app.listen(3000,()=>{ // start server
    console.log("BOOM");
})

const express = require("express");
const app = express();

//basic parameter
app.get('/user/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`Welcome, ${username}`);
})

app.get('/user/:username/post/:postID', (req,res)=>{
    const username = req.params.username;
    const postID=req.params.postID;
    res.send((`User: ${username}, PostID: ${postID}`));
})
app.get('/filter',(req,res)=>{
    const department = req.query.department;
    const year = req.query.year;
    res.json({
        message:"Kaam hogya",
        department: department || 'All departments',
        year: year || 'All years',
        results:[
            {id:1, name: 'Swaraj'},
            {id:2, name: 'Dhruvin'}
        ]
    });
});
app.listen(3000,()=>{
    console.log("BOOM");
})
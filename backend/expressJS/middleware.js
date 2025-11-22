const express = require("express"); // import express
const app = express(); // init app

const checkAdmin = (req,res,next)=>{ // admin middleware
    const isAdmin = req.query.admin === "true"; // check admin flag
    if(isAdmin){
        next(); // allow
    }else{
        res.status(403).send("Forbidden"); // deny
    }
}

app.get('/admin', checkAdmin, (req,res)=>{ // protected route
    res.send("Admin Dashboard");
})

app.listen(3000, ()=>{ // start server
    console.log("SERVER IS RUNNING!")
})

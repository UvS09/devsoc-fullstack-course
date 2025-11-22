const express = require("express");
const app = express();

const checkAdmin=(req,res,next)=>{
    const isAdmin = req.query.admin === "true";
    if(isAdmin){
        next();
    }else{
        res.status(403).send("Forbidden");
    }
}

app.get('/admin', checkAdmin, (req,res)=>{
    res.send("Admin Dashboard");
})

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING!")
})
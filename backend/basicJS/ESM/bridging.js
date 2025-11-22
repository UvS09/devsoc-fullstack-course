import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send("Hello from an ESM powered NodeJS server");
})

app.listen(PORT, () => {
    console.log("Server listening to port 3000");
})
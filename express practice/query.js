const express =require("express");
const app = express();

app.get('/search', (req,res)=> {
    const query = req.query.q;
    res.send(`You searched for : ${query}`);
});
app.get('/filter',(req,res)=>{
    const category = req.query.category;
    const price = req.query.price;
    res.json({
        message: 'Filter',
        price: 3000,
        category: 'Man',
        color: 'Blue'
    });
});
app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING");
})
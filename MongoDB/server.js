const express=require("express");
const mongoose=require("mongoose");
// const postRoutes=require('./routes/postRoutes');
const userRoutes = require("./routes/userRoutes");
const app=express();
app.use(express.json());

const PORT = 3000
const connectDB = async () => {
    const connection = await mongoose.connect("mongodb+srv://uvs64041_db_user:SC0909@cluster0.lkayniz.mongodb.net/?appName=Cluster0")
        .then(() => {
            console.log("MONGOOSE")
        })
        .catch((err) => {
            console.log("Error")
        });
}

app.use('/api/users', userRoutes);
// app.use('api/posts', postRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running")
    })
})


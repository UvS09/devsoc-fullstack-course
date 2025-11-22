const mongoose=require("mongoose");

const PostSchema =new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'title required'],
    },
    body:{
        type: String, 
        required:[true, 'Body required'],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
module.exports=mongoose.model('Post', PostSchema);
const express=require("express");
const userRoutes=express.Router();
const User=require('../models/User');

const notFound=(res)=>
    res.status(404).json({success: false, error : 'User not found'});

userRoutes.post('/create', async(req,res)=>{
    try{
        const user=await User.create(req.body);
        if(!user) return notFound(res);
        res.json({success: true, data:user});
    }catch{
        res.status(400).json({success:false, error:"Invalid user"});
    }
});

userRoutes.get('/all', async (req, res) => {
  try {
    const users = await User.find(
        {
            username : "john"
        }
    ).lean();
    res.json({ success: true, data: users });
  } catch {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});
userRoutes.put('/update', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return notFound(res);
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});


module.exports=userRoutes;
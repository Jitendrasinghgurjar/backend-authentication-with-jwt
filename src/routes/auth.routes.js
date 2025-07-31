const express = require('express');
const userModel = require('../models/user.model')
const router = express.Router()
router.post('/register',async(req,res)=>{
    const{username,password} = req.body;
    const user = await userModel.create({
    username,password
})
res.status(201).json({
    message:"user registered successfully",
    user
})
})
router.post('/login',async(req,res)=>{
    const {username,password} = req.body
    const user = await userModel.findOne({
        username: username
    })
    
    if(!user){
        return res.status(401).json({
            message: "user account Not Found [invlaid username]"

        })
    }
    const isPasswordValid = password == user.password

if(!isPasswordValid){
    return res.status(401).json({
        message: "invalid password"
    })
}
res.status(200).json({
    message: "user loggedin successfully"
})
})
module.exports = router
const User = require('../model/auth')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.register = async(req,res,next) => {
    const {name,email,password} = req.body;
    console.log(req.body)

    try{
        const user = await User.create({
            name,email,password
        })
        res.status(201).json({success:true,user})
        // sendToken(user,201,res)

    }catch(error){
        res.json({success:false, error:error.message})
    }
}

exports.login = async (req,res) =>{
    const{email,password} = req.body;
    console.log(req.body)

    if(!email || !password){
        res.status(200).json({success:false,error:"please provide credentials"})
    }

    try{
        const user = await User.findOne({email}).select("+password")
        if(!user){
            res.json({success:false,error:"User not found"})
        }

        const isMatch = await user.matchPasswords(password)

        if(!isMatch){
            res.json({success:false,error:"Invalid credential"})
        }

        // res.json({success:true,token:"svvgghm"})
        sendToken(user,200,res)

    }catch(error){
        res.json({success:false, error:error.message})
    }
    
}

const sendToken = (user,statuscode,res) =>{
   const token = user.getSignedToken();
   console.log(token)
   res.status(statuscode).json({success:true,token})
}
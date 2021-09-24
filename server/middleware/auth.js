const jwt = require('jsonwebtoken');
const User = require("../model/auth")
const ErrorResponse = require('../utils/errorresponse')

const protect = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return next(new ErrorResponse("Unauthorised to access this route",401))
    }
    try{
        const decoded = jwt.verify(token,process.env.SECRET)
        console.log(decoded);

        const user = await User.findById(decoded.id)
        
        console.log(user)

        if(!user){
            return next(new ErrorResponse("No user found with ths id",404));
        }

        req.userid = user._id.toString();
        next();
    }catch (error){
        console.log(error)
        return next(new ErrorResponse("Not authorised to acces this route",401))
    }

}
module.exports = protect
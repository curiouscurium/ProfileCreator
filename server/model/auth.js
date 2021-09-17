const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:255
    },
    email:{
        type:String,
        required:true,
        min:5,
        max:255

    },
    password:{
        type:String,
        required:true,
        min:3,
        max:1024
    }
    

});

userSchema .pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})


userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.getSignedToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET,{expiresIn:process.env.JWT_EXPIRE})
};


module.exports = mongoose.model('User',userSchema)

// export default mongoose.model('User',userSchema)
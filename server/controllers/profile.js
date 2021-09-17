const Profile = require('../model/profilemodel')


exports.profile = async(req,res,next) => {
    const {contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob} = req.body;
    console.log(req.body)
    try{
        const profiledata = await Profile.create({
            contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob
        })
        // console.log(profiledata)
        res.status(201).json({success:true,profiledata})
        sendToken(profiledata,201,res)

    }catch(error){
        res.json({success:false, error:error.message})
    }
}
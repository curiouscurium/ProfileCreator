// export const getProfile = (req,res)=>{
//     res.send('this works')
// }
exports.getPrivateData = (req,res,next) =>{
    res.status(200).json({
        success:true,
        data: "You got access to the Profile page"
    })

}


// const Profile = require('../model/profilemodel')


// exports.profile = async(req,res,next) => {
//     const {contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob} = req.body;

//     try{
//         const profiledata = await Profile.create({
//             contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob
//         })
//         console.log(profiledata)
//         res.status(201).json({success:true,profiledata})
//         // sendToken(user,201,res)

//     }catch(error){
//         res.json({success:false, error:error.message})
//     }
// }
//     })
// }
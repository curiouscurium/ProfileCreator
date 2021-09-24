const Profile = require('../model/profilemodel')


exports.createProfile = async(req,res,next) => {
    const {contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob} = req.body;
    console.log(req.body)
    try{
        const profiledata = await Profile.create({
            contactNumber,Email,Degree,IntermediateEducation,WorkExperience1,gender,dob,userid:req.userid
        })
        console.log(profiledata)
        return res.status(201).json({success:true,profiledata})
        // sendToken(profiledata,201,res)

    }catch(error){
        res.json({success:false, error:error.message})
    }
}

exports.getProfile = async(req,res,next) => {
    try{
        let result = await Profile.find({userid:req.userid})
        console.log(result)
        console.log(req.userid)
        return res.json(result);
       }catch (err){
        res.status(500).send({message:err.message})
    }
}

    // const profileResults = Profile.findById(req.params.id)

    // res.status(200).json({Profile:profileResults})
    
    // Profile.findById(req.params.id)
    // .then(results => {
    //     res.status(200).json({
    //         Profile:results

            
    //     })
    //     console.log(results)
    // })
    // .catch(err =>{
    //     console.log(err);
    //     res.status(500).json({
    //         error :err
    //     })
    // })
    

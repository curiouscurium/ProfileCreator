const mongoose = require('mongoose')
const { Schema } = mongoose


const profileSchema = new Schema({
    contactNumber: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        sparse :true
    },
    Degree: {
        type: String
    },
    IntermediateEducation: {
        type: String,
        required: true
    },
    WorkExperience1: {
        type: Number,
        required: true
    },
    // subjects: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'subject'
    //     }
    // ],
    
    gender: {
        type: String
    }, 
    dob: {
        type: String,
        required: true
    },
    userid : {
        type: String,
        required: true

    }
})


module.exports = mongoose.model('Profile',profileSchema)

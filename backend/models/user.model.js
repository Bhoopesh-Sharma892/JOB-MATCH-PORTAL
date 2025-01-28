import { text } from "express";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname : {
        tpye : String,
        require : true,
    },
    email : {
        tpye : String,
        require : true,
        unique : true
    },
    phoneNumber : {
        tpye : Number,
        require : true 
    },
    password : {
        tpye : String,
        require : true
    },
    role : {
        tpye : String,
        enum : ["student" , "recruiter"],
        require : true
    },
    profile : {
        bio : {tpye : String},
        skills : [{tpye : String}],
        resume : {tpye : String}, // url to resume file
        resumeOriginalName : { tpye : String },
        company : {tpye : mongoose.Schema.Types.ObjectId , ref:'Company'}, 
        profilePhoto:{
            tpye: String,
            default: '',
        }
        },
    }, {timestamps:true});

    export const User = mongoose.model('User', userSchema);

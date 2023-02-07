import mongoose from "mongoose";
const singleFileSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    cat:{
        type: String,
        required: true
    },
    fileName:{
        type:String,
        required:true
    },
    filePath:{
        type:String,
        required:true
    },
    fileType:{
        type:String,
        required:true
    },
    fileSize:{
        type:String,
        required:true
    }
},{timestamps:true})
const SingleFile = mongoose.model('SingleFile', singleFileSchema)
export default SingleFile;
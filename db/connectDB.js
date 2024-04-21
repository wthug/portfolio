import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    massage:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('user',userschema);
export default userModel;


import {model, Schema} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
    {
    name: {
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    cellphone:{
        type:String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    city: {
        type:String,
        required:true
    }
    }, 
    {
        timestamps:true,
        versionKey: false,
    }
);


userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePasword = async (password, receivedPassword) => {
    return await  bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);
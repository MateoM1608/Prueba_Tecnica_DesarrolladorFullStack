import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {

    const {name, lastname, cellphone, email,gender, password, city} = req.body;

    try{
        console.log(req.body)
    const newUser = new User({
        name,
        lastname,
        cellphone,
        email,
        gender,
        password: await User.encryptPassword(password),
        city
    })

    console.log(newUser)
    const saveUSer = await newUser.save()

    const token = jwt.sign({id:saveUSer._id}, config.SECRET,{
        expiresIn: 86400 // 24 horas
    })

    res.status(200).json({token})
    } catch(err){
        res.status(200).json({msg: 'This email already exist'})
    }
    
}

export const signIn = async (req, res) => {

    const userFound = await User.findOne({email: req.body.email})

    if(!userFound) return res.status(200).json({message: 'User not found'})

    const matchPassword = await User.comparePasword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(200).json({token: null, message: 'Invalid password'})

    const  token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token: token,
        name: userFound.name})
}   
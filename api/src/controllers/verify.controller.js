import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'

const Verify = async (req, res) => {

    try{
        const { token } = req.params;

        if(!token) return res.json({message: 'No token provided'})
    
        const decoded = jwt.verify(token, config.SECRET)
    
    
        const user = await User.findById(decoded.id)
        console.log(user)
        res.json({message: 'It is logged'})

    } catch (err){
        res.json({message: 'No user found'})
    }
    
}

export default Verify
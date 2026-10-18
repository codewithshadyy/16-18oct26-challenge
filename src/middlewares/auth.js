

require('dotenv').config()
const jwt= require('jsonwebtoken')

exports.protect = async (req, res, next) => {

    let token,

   try {

     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]



if(!token){
        return res.status(400).json({message:"Inalid token"})
    }
const decoded = jwt.verify(token, process.env.JWT_SECRET)   

req.user = decoded
next()


    }
    
    
    
   } catch (error) {

    
        console.error(error.message)

        return res.status(500).json({
            message:"Error validating the token"
        })
    
    
   }
}
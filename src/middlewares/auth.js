

require('dotenv').config()
const jwt= require('jsonwebtoken')

exports.auth = async (req, res, next) => {

    let token,

   try {

     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")
    }
    
    if(!token){
        return res.status(400).json({message:"Inalid token"})
    }
    
   } catch (error) {
    
   }
}
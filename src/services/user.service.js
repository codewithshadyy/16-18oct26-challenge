
const bcrypt = require("bcrypt")
const UserRepository = require("../repositories/user.repository")
const userRepository = require("../repositories/user.repository")
const jwt = require("jsonwebtoken")

require("dotenv").config()
class UserService{

    async registerUser(username, email,roles,  password){
        
        const existingUser =  await userRepository.findByEmailAndUsername(email, username)

        if(existingUser){
            const error = new Error("Email already registered")
            error.statuscode = 400

            throw error

        }

        const salt  = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await userRepository.create({
            username,
            email,
            roles,
            password:hashedPassword
            
        })

        return {id:newUser._id, username:newUser.username, email:newUser.email, roles:newUser.roles}
    }




    async loginUser(username, password){
        const  user = await UserRepository.findByEmailAndUsername(username)


        if(!user){
            const error = new Error("Invalid credentials")

            throw error
        }



        const isMatch= await bcrypt.compare(password, user.password)

        if(!ismatch){
            const error = new Error("Invalid Credentials")

            throw error
        }


        const token = jwt.sign({id:user._id, username:user.username, email:user.email  }, process.env.JWT_SECRET, {
    expiresIn:"7d"
            })



            return {
                 token, 
                  user:{
                        id:user._id, username:user.username, email:user.email

     }
}



    }
}


module.exports = new UserService()

const User = require("../models/User")


class UserRepository{
    async findByEmailAndUsername(email, username){

        const sanitizedEmail = email.trim().toLowerCase()
        const sanitizedUsername = username.trim().toLowerCase()

        return await User.findOne({
            $or:[
                {email:sanitizedEmail},
                {username:sanitizedUsername}
            ]
        })

    }


    async create(userData){
        return await User.create(userData)
    }
    
    async findById(id){
        return await User.findById(id).select("-password")
    }
}

module.exports = new UserRepository()
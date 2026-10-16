
const User = require("../models/User")


class UserRepository{
    async findByEmailAndUsername(email, username){

        return await User.find({
            $or:[
                {email:email},
                {username:username}
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
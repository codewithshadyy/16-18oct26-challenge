const jwt = require("jsonwebtoken")

require("dotenv").config()


class TokenHandler{
    async(user){
        return jwt.sign({id:user._id, username:user.username, role:user.roles},
             process.env.JWT_SECRET,
              {expiresIn:"7d"})
    }
}





module.exports = new TokenHandler()
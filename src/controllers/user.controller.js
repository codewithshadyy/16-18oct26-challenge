

const UserService = require("../services/user.service")


class UserController{
    async register(req,res, next){


        try {

            const {username, email, roles, password} = req.body

    if (!name || !email || !roles || !password) {
        return res.status(400).json({ message: 'All fields are required' })
      }

      const user = await UserService.registerUser(username, email,roles, password)

      return res.status(201).json({ success: true, data: user })

            
        } catch (error) {


            next(error)
            return res.status(500).json({
                message:'We ran into problem',
                error:error.message
            })
            
        }
    }
}


module.exports = new UserController()
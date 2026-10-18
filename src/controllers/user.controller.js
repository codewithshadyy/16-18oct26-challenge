

const userService = require("../services/user.service")
const UserService = require("../services/user.service")


class UserController{
    async register(req,res, next){


        try {

            const {username, email, roles, password} = req.body

    if (!username || !email  || !password) {
        return res.status(400).json({ message: 'All fields are required' })
      }

      const user = await UserService.registerUser(username, email, roles, password)

      return res.status(201).json({ success: true, data: user })

            
        } catch (error) {


            next(error)
            return res.status(500).json({
                message:'We ran into problem',
                error:error.message
            })
            
        }
    }




    async login(req, res, next ){


        try {

            const {username, password} = req.body

            if(!username || !password){
                return res.status(400).json({
                    message:"Pleaase input all the fields"
                })

            const user = await UserService.loginUser(username, password)
            
            return res.status(200).json({
                message:`Welcome back ${user.username} !!!`,
                data:user
            })

            }
        } catch (error) {

            console.error(error.message)

            return res.status(500).json({
                message:"Something went wrong"
                
            })
            
        }

    }
}


module.exports = new UserController()
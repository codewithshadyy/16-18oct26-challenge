
const express =require("express")
const router = express.Router()
const UserController = require("../controllers/user.controller")
const userController = require("../controllers/user.controller")



router.post("/register", userController.register)

module.exports = router
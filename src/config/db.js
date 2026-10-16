

const mongoose =require("mongoose")
require("dotenv").config()

async function connectDB(params) {

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`User service database connected successfully: ${conn.connection.host}`)
        
    } catch (error) {
         console.error(`Error connecting to the database:${error.nessage}`)

         process.exit(1)
        
    }


    
}

module.exports = connectDB
const mongoose = require("mongoose")
require("dotenv").config()


const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL
        )
    .then(
        console.log("DB connect ho gaya hai")
    )
    .catch((error)=>{
        console.log(error)
        process.exit(1)
    })
}


module.exports = connectWithDb;
const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then (console.log("DB Connection Successful"))
    .catch((error) =>{
        console.log("DB Connection Issue");
        console.error(error);
        process.exit(1);
    })
}
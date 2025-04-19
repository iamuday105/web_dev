// config/database.js
const mongoose = require('mongoose');

exports.connect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        .then(() => console.log("DB connected successfully!"))
        .catch((error) => {
            console.log("DB connection failed");
            console.error(error);
            process.exit(1);
        });
};

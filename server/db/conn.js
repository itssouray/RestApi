const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB)
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Error connecting to the database", err);
    });


module.exports = mongoose;
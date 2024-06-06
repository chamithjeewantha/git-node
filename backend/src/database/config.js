const mongoose = require("mongoose");

const { MONGODB_URI } = require("../utils/config");

const connectDB = () => {
    mongoose
    .connect(MONGODB_URI)
    .catch((error) => console.log(`Error connecting to DB : ${error}`));

    mongoose.connection.on("connected", () => {
        console.log("Connected to DB");
    });

    mongoose.connection.on("cerror", () => {
        console.log("Error connecting to DB");
    });
};

module.exports = connectDB;
 const colors = require('colors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const DataBase = async()=>{
try {
    await mongoose.connect("mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/")
        console.log(`DataBase is Connected to Server on Port 8080 `.bgGreen.black);
} catch (error) {
    console.log({
        message: "DataBase is not connected",
        error : error
    });
}
}
module.exports = DataBase
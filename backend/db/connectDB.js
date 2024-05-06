const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/config.env" })
function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
        .connect("mongodb+srv://vairamuthu:vairamuthu@vanamvanguard.j4oiqco.mongodb.net/evo-green") 
        .then(function () {
            console.log("DB_connected");
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB
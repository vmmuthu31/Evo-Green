const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB")
const cloudinary = require("cloudinary");

// Handling Uncaught Execption => anything not defind Uncaught Execption 

process.on("uncaughtException" , (err) =>{
    console.log(`Error , ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})


//config =>
 dotenv.config({path : "backend/config/config.env"})
// Connect With MongoDB
connectDB();


// conncet with cloudinary

cloudinary.config({
  cloud_name: "dvmmanzgu",
  api_key: "423488867724955",
  api_secret: "gNEyRJ_zKGh39MoO3pOIJjwakFw",
});

const PORT =  5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

// Unhandled Promise Rejection  => server issue
process.on("unhandledRejection" , (err) =>{ 
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
// if there any issue occures eg : broken host link eg : then return msg and server will close
server.close(() =>{
    process.exit(1);
})
    
})
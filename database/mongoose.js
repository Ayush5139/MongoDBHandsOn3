const mongoose = require("mongoose")
const { employeeModel } = require("../model/projectModel")
mongoose.set("strictQuery",true)
const url = "mongodb://127.0.0.1:27017/MongoDBHandsOn3"

function connectDB(){
    try{
        const connected = mongoose.connect(url)
        console.log("connected to db")
        return connected
    }
    catch(err){
        console.log(err)
    }
}




module.exports={connectDB}
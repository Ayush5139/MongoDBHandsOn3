const express = require("express")
const { connectDB } = require("./database/mongoose")
const route = require("./routes/routes")

const app = express()

app.use(express.json())
app.use(route)

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(9000,async ()=>{
    console.log("running on 9000")
    connectDB()
})
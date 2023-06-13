const { saveData, showDB, deleteEntry, updateEntry, salariedData, requiredEntry } = require("../controller/employee")

const route = require("express").Router()

route.post("/data",saveData)
route.get("/employeedata",showDB)
route.delete("/employeedel/:id",deleteEntry)
route.get("/employeeupd/:ini/:upd",updateEntry)
route.get("/employeesal/:salary",salariedData)
route.get("/employeerequired/:year/:exp",requiredEntry)

module.exports=route
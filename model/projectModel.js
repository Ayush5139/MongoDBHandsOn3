const mongoose = require("mongoose")
// const Schema = mongoose.Schema

// const user = new Schema({})

const user = mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String

})

const employeeModel = mongoose.model('EmployeeData',user)

module.exports={employeeModel}
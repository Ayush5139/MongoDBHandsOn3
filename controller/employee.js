const employeeModel = require("../model/projectModel")

const saveData = async (req,res) =>{
    const empData = req.body
    try{
        const data = empData.map((val)=>{
            return{
                name:val.name,
                email:val.email,
                password:val.password,
            }
        })
        const insertmany = await employeeModel.insertMany(data)
        return res.send(insertmany)
    }
    catch(err){
        console.log(err)
    }
}

async function showDB(req,res){
    const getData = await employeeModel.find({salary:{$gt:30000}})
    res.send(getData)
}

async function deleteEntry(req,res){
    const id = req.params.id
    console.log(id)
    const response = await employeeModel.deleteMany({"id":String(id)})
    res.send(response1)
}

async function updateEntry(req,res){
    const original = req.params.ini
    const updated = req.params.upd    
    const response = await employeeModel.updateMany({"id":original},{$set:{"id":updated}})
    res.send(response)
}

async function salariedData(req,res){
    const salary = req.params.salary
    console.log(salary)
    const response = await employeeModel.find({"salary":{$gt:salary}}).toArray()
    res.send(response)
}

async function requiredEntry(req,res){
    const yearGrad = req.params.year
    const overallExp = req.params.exp
    const response = await employeeModel.find({yearGrad:yearGrad,overallExp:{$gte:overallExp}}).toArray()
    res.send(response)
}

module.exports={saveData,showDB,deleteEntry,updateEntry,salariedData,requiredEntry}

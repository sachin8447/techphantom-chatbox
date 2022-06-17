const Task = require("../modal/Task")

const getAllTasks = async (req,res)=>{
     res.json(await Task.find())
}

const getTaskById = async (req,res)=>{
    res.json(await Task.findById(req.query.id))
}


const createTask = async (req,res)=>{
    res.json(await Task.create(req.body))
}


const updateTask = async (req,res)=>{
    res.json(await Task.findByIdAndUpdate(req.body))
}


const deleteTask = async (req,res)=>{
    res.json(await Task.findByIdAndDelete(req.query.id))
}






module.exports = {
    getAllTasks,getTaskById,createTask,updateTask,deleteTask
}
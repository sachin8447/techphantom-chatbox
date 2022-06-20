
const User = require("../modal/User/User.js")



const getUserById = async (req,res)=>{
    res.json(await User.findById(req.query.id))
}


const createUser =  async (req,res)=>{
    console.log(req.body)
    const user = await User.create(req.body)
    res.send(user)

}

const updateUser = async (req,res)=>{
    res.json(await User.findByIdAndUpdate(req.body))
}



const deleteUser = async (req,res)=>{
    res.json(await User.findByIdAndDelete(req.query.id))
}






module.exports = {
    getUserById,createUser,deleteUser,updateUser
}

const Chat = require("../modal/Chat/Chat.js")

const getAllChats = async (req,res)=>{
     res.json(await Chat.find())
}

const getChatById = async (req,res)=>{
    res.json(await Chat.findById(req.query.id))
}


const createChat =  async (req,res)=>{
    const chat = await Chat.create(req.body)
    res.send(chat)

}



const deleteChat = async (req,res)=>{
    res.json(await Chat.findByIdAndDelete(req.query.id))
}






module.exports = {
    getAllChats,getChatById,createChat,deleteChat
}
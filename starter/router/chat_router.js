const express = require('express');
const chatRouter = express.Router();
const {getAllChats,getChatById,createChat,deleteChat} = require('../controller/chat_controller');

chatRouter.route('/getChats').get(getAllChats);
chatRouter.route('/getChatById').get(getChatById);
chatRouter.route('/createChat').post(createChat);
chatRouter.route('/deleteChat').delete(deleteChat);

//com
module.exports = chatRouter
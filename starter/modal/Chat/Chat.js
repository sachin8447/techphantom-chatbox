const mongo = require('mongoose');


const Chat = mongo.Schema({
    chatText:{
        type:String,
        required:[true,`Provide chatText`],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },
    senderId:{
        type:String,
        required:[true,'Provide Sender Name']
    },
    receiverId:{
        type:String,
        required:[true,'Provide Sender Name']
    }
    
})


module.exports = mongo.model('chat',Chat);
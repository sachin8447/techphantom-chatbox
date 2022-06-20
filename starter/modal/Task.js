const mongo = require('mongoose')


const TaskSchema = mongo.Schema({
    name:{
        type:String,
        required:[true,'Provide Name'],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },completed:Boolean
})


//module.exports = mongo.model('Task',TaskSchema);
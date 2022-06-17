const mongo = require('mongoose')


const TaskSchema = mongo.Schema({
    name:String,completed:Boolean
})


module.exports = mongo.model('Task',TaskSchema);
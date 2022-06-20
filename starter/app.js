const expressServer = require("express");
const app = expressServer();
const bodyParser = require('body-parser');
const connectDb = require('./db/db');
const port = 3000;
const  tasks =  require('./router/routed');
const  chats =  require('./router/chat_router');




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()
// parse application/json
app.use(bodyParser.json())
app.use(expressServer.static('public'));


app.get("/",(req,res)=>{
    res.send(req.params)
})


app.use('/app/v1/',tasks);
app.use('/chat/v1/',chats);




const start = async ()=>{
try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on : ${port}`));
} catch (error) {
    
}
}


start()
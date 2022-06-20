const expressServer = require("express");
const app = expressServer();
const bodyParser = require('body-parser');
const connectDb = require('./db/db');
const port = 3000;
const  tasks =  require('./router/routed');
const  chats =  require('./router/chat_router');
const  user =  require('./router/user_router');




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()
// parse application/json
app.use(bodyParser.json())
app.use(expressServer.static('public'));


app.post("/user/v1/",(req,res)=>{
    res.send(req.body)
})


app.use('/chat/v1/',chats);
app.use('/user/v1/',user);




const start = async ()=>{
try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on : ${port}`));
} catch (error) {
    
}
}


start()
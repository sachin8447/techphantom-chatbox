const expressServer = require("express");
const app = expressServer();
const port = 3000;
const  tasks =  require('./router/routed');
const connectDb = require('./db/db');
require('dotenv').config()



app.get("/",(req,res)=>{
    res.send(req.params)
})


app.use('/app/v1/',tasks);

const start = async ()=>{
try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on : ${port}`));
} catch (error) {
    
}
}


start()
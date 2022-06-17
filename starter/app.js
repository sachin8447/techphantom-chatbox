const expressServer = require("express");
const app = expressServer();
const port = 3000;

app.get("/",(req,res)=>{
    res.send(req.params)
})


app.use('app/v1/service')



app.listen(port, console.log(`Server is listening on : ${port}`));

const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.post("/",function(req,res){
    console.log(req);
    res.statusCode = 200;
    res.send('Ok');
});

app.listen(PORT);


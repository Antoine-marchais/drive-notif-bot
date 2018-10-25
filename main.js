const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/secret",function(req,res){
    res.statusCode = 200;
    res.send('coucou');
});

app.listen(PORT);


const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/secret",function(req,res){
    console.log(req);
    res.statusCode = 200;
    res.send('coucou');
});

app.listen(PORT);


const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/googlea49ca8e20087d2e8.html",function(req,res){
    console.log(req);
    res.statusCode = 200;
    res.send('coucou');
});

app.listen(PORT);


const express = require("express");
const parser = require("body-parser");
const PORT = process.env.PORT;

const app = express();
app.use(parser.json());
//google domain verification
app.get("/googlecc96d596baba5bdf.html",function(req,res){
    res.statusCode = 200;
    res.send("google-site-verification: googlecc96d596baba5bdf.html");
});

app.post("/",function(req,res){
    console.log(req);
    res.statusCode = 200;
    res.send("ok");
})

app.listen(PORT);


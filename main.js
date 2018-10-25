const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/secret",function(req,res){
    res.statusCode = 200;
    res.send('coucou');
});
app.get("/googlecc96d596baba5bdf.html",function(req,res){
    res.statusCode = 200;
    res.send("google-site-verification: googlecc96d596baba5bdf.html");
})

app.listen(PORT);


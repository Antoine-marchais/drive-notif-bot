const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/secret",function(req,res){
    res.statusCode = 200;
    res.send('coucou');
});
app.get("/googlea49ca8e20087d2e8.html",function(req,res){
    res.statusCode = 200;
    res.send("google-site-verification: googlea49ca8e20087d2e8.html");
})

app.listen(PORT);


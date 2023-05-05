require("dotenv").config();

const express = require("express");

const path = require("path");

const app = express();

app.get("/", function(req, res){
    console.log("GET Received");
    res.status(200).sendFile(path.join(__dirname,"index.html"));
});

// app.get("/page1", function(req, res){
//     console.log("GET page1 received");
//     res.status(200).sendFile(path.join(__dirname,"page1.html"));
// });

// app.get("/page2", function(req, res){
//     console.log("GET page2 received");
//     res.status(200).sendFile(path.join(__dirname,"page2.html"));
// });

app.use(express.static(path.join(__dirname)));

app.post("/", function(req, res){
    console.log("POST JSON received.");
    res.status(200).json({"message" : "Hello from JSON"});
});

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.MSG_START_SERVER, server.address().port);
});
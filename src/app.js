
const express = require("express");

const app = express(); //you are creating new server

app.get("/",(req, res) => { //route
    res.send("only slash badako !"); //route handler
});

app.get("/test",(req, res) => {
    res.send("test request ra badako ");
});

app.get("/hello",(req, res) => {
    res.send("the hello request !");
});

app.listen(7777, ()=> {
    console.log("server is successfully listening on port 7777...")
});



const express = require("express");

const app = express(); //you are creating new server

app.get("/user",(req, res) => { 
    res.send("welcome to user page"); //sending data
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


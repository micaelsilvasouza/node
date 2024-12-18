const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/send.html")
})

app.listen(8081, ()=>{console.log("Servidor funcionando")})
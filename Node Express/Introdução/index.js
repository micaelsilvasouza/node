const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("Essa é minha página criada usando Express no Node!")
})

app.listen(8081, ()=>{
    console.log("Servidor rodando na url http://localhost:8081")
})
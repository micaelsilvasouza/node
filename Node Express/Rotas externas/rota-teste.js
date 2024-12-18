const express = require("express")
const rota = express.Router()

rota.get("/", (req, res)=>{
    res.send("página principal da rota: <a href='rotateste/teste'>Página teste</a>")
})

rota.get("/teste", (req, res)=>{
    res.send("página de Teste")
})


module.exports = rota
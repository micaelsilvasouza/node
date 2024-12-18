const express = require("express")
const app = express()
const rota = require("./rota-teste")

app.get("/", (req, res)=>{
    res.send("<p>Clique no link para acessar a rota>: <a href='rotateste'>Rota teste</a></p>")
})

app.use("/rotateste", rota)

app.listen(8081, ()=>{console.log("Servidor rodando")})
const express = require("express")
const app = express()

app.use((req, res, next)=>{
    console.log("passou por um meddleware")
    next()
})

app.get("/teste", (req, res)=>{
    res.send("Se você chegou aqui é porquer passou por um middleware")
})

app.listen(8081, ()=>{console.log("Servidor rodando")})
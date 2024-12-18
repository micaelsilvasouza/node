const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//configurar body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/form.html")
})

app.post("/post", (req, res)=>{
    res.send("Formulario recebido: " + req.body.nome + " Senha: " + req.body.senha)
})
app.listen(8081, ()=>{console.log("Servidor Rodando")})
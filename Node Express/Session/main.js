const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("connect-flash")

// Configurando sessão
app.use(session({
    secret: "umvalor",  // valor chave da sessão, podendo ser qualquer valor
    resave: true, 
    saveUninitialized: true
}))

app.get("/", (req, res)=>{
    res.send("Configurado session")
})

app.listen(8081, ()=>{ console.log("Servidor Rodando")})
const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("express-flash")

// Configurando sessão
app.use(session({
    secret: "umvalor",  // valor chave da sessão, podendo ser qualquer valor
    resave: true, 
    saveUninitialized: true
}))

//configurando flash
app.use(flash())

app.use((req, res, next)=>{
    req.flash("men", "1 2 3 TESTANDO FLASH")
    req.flash("men", "Mais um valor")
    req.flash("men", "USADO PELO EXPRESS-FLASH")
    next()
})

app.get("/", (req, res)=>{
    let men = req.flash("men")
    res.send(men)
})

app.listen(8081, ()=>{ console.log("Servidor Rodando")})
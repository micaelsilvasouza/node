const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const session = require("express-session")
const flash = require("express-flash")
const local_strategy = require("passport-local").Strategy
const passport = require("passport")

//Configurar
app.use(session({
    secret: "umvalor",  // valor chave da sessão, podendo ser qualquer valor
    resave: true, 
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

passport.use(new local_strategy({usernameField: "email", passwordField: "senha"}, (email, senha, done)=>{
    if(senha == "senha"){
        return done(null, {dados: "dados que vinha do banco de dadso"}, {message: "Senha correta"})
    }else{
        return done(null, false, {message: "Senha incorreta"})
    }
}))

passport.serializeUser((usuario, done)=>{ // uma seção com o id de usuario
    done(null, "parametro usuario, refente o campo dados passa lá em cima") // pdoe ser qualquer atributo do usario
})

passport.deserializeUser((id, done)=>{ // uma seção com todo os dados do usuario
    done(null, {id: "iddeusuario", d: "data Aleatório"})
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/form.html")
})

app.post("/teste", passport.authenticate("local", {
    successRedirect: "/recebido",
    failureRedirect: "/error",
    failureFlash: true,
}))


app.get("/recebido", (req, res)=>{
    res.send(req.user)
})

app.get("/error", (req, res)=>{
    res.send(req.flash("error"))
})

app.listen(8081, ()=>{
    console.log("Rodando")
})
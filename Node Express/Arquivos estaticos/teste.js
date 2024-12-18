const express = require("express")
const app = express()

// Configurando página de estáticos
app.use(express.static(__dirname + "/estaticos"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/estatic.html")
})

app.listen(8081, ()=>{console.log("Servidor Rodando")})
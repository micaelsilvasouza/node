const express = require("express")
const app = express()
const handlebars = require("express-handlebars")

    //config handlebars template engine
    app.engine("handlebars", handlebars.engine())
    app.set("view engine", "handlebars")

//Rota 
app.get("/",(req, res)=>{
    res.render("teste", {
        nome: "Micael", 
        idade: 21,
        cond: true,
        arr: ["Novidade", 12, true, 5.9, false],
        obj: {name: "Antenor", year: 55},
        arrobj: [
            {name: "Antenor", year: 55},
            {name: "Alrelio", year: 75},
            {name: "Dionisio", year: 65},
            {name: "Santiago", year: 85},
        ]
    })
})

app.get("/agenda", (req, res)=>{
    res.render("registros", {
        registros:[
            ["aleatorio1", "10:20", "tudo nosso e nada deles"],
            ["aleatorio2", "11:20", "nada deles e tudo nosso"],
            ["aleatorio3", "12:20", "nada nosso e tudo deles"],
            ["aleatorio4", "13:20", "tudo deles e nada nosso"]
        ]
    })
})

app.listen(8081, ()=>{
    console.log("Servidor Rodando")
})
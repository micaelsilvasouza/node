const TesteModel = require("../Coleção/mongo-db")

TesteModel.find({}, {_id: 0}).sort({value: "asc"}).then(dados => {
    console.log(dados)
}).catch(err => {
    console.log("Erro: " + err)
})
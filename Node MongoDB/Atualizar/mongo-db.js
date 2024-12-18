const TesteModel = require("../Coleção/mongo-db")

/*TesteModel.updateOne({_id: "675f46a60ed7725efee67e38"}, {title: "Atualizado", value: 456})
.then(() => {
    console.log("Atualizado com sucesso")
}).catch(err => {
    console.log("Erro: " + err)
})*/

/*TesteModel.updateMany({}, {title: "Atualizado", value: 456})
.then(() => {
    console.log("Atualizado com sucesso")
}).catch(err => {
    console.log("Erro: " + err)
})*/

TesteModel.findOneAndUpdate({_id: "675f46a60ed7725efee67e3a"}, {title: "Novamete de volta", value: 665})
.then((dados) => {
    console.log("Atualizado com sucesso")
    console.log(dados)
}).catch(err => {
    console.log("Erro: " + err)
})
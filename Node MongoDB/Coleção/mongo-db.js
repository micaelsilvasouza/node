const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/nodedb").then(()=>{
    console.log("Sucess conection")
}).catch(err => {
    console.log("No sucess conetion: ", err)
})

const TesteSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true 
    },

    value: {
        type: Number
    }
})

mongoose.model("testes", TesteSchema) // Criar a coleção

const TesteModel = mongoose.model("testes")

module.exports = TesteModel
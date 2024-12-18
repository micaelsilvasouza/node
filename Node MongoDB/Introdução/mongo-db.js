const mongoose = require("mongoose")

//mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/nodedb",{
    //useMongoClient: true
}).then(()=>{
    console.log("Conectado com sucesso")
}).catch(err => {
    console.log("Não foi possivel se conectar: ", err)
})

module.exports = mongoose
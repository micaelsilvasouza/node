const express = require("express")
const app = express()

app.get("/parametros/:paramA/:paramB", (req, res)=>{
    let men = `Valor A: ${req.params.paramA}; <br> Valor B: ${req.params.paramB}`
    res.send(men)
    //console.log(req.params)
})

app.listen(8081, function() {
    console.log("Servidor Funcionando")
})
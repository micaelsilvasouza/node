var fs = require("fs")

fs.appendFile("demo.txt", "TEM ALGO ESCRITO AQUI\n", (err)=>{
    if(err) throw err
    console.log("Atualizado com sucesso")
})
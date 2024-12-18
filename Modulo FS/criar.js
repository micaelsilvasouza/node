var fs = require("fs")

fs.open("demo.txt", "w", (err, fd)=>{
    if(err) throw err
    console.log("Arquivo salvo com sucesso")
})
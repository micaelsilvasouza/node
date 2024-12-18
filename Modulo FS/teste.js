var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer((req, res)=>{
    let q = url.parse(req.url, true).query

    fs.writeFile(`${q.arq}.txt`, `${q.txt}`, "utf8", (err)=>{
        if(err) throw err
        fs.readFile(q.arq + ".txt", (err, data)=>{
            res.writeHead(200, {"Content-Type": "text/html", "accept-charset": "utf8"})
            res.write(data)
            res.end()
        })  
    })
}).listen(8080)

/*
Vem sempre duas respostas:
1° o valor correto
2° o valor undefined
por esse motivo não está correto
*/
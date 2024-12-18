var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer((req,res)=>{
    let q = url.parse(req.url, true)
    fs.readFile("." + q.pathname, (err, data)=>{
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"})
            return res.end("ERRO 404 PÁGINA NÃO ENCOTRADA")
        }

        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        return res.end()
    })
}).listen(8080)
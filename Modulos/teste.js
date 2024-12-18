var http = require("http")
var dt = require("./module")
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("Data formato completo: " + dt.myDateTime())
    res.end()
}).listen(8080)
const http = require("http")
const url = require("url")

http.createServer(
    (rq, rs)=>{
        let q = url.parse(rq.url, true).query
        let tx = q.dia + "/" + q.mes
        rs.writeHead(200, {"Content-Type": "text/html"})
        rs.write(tx)
        rs.end()
    }
).listen(8080)
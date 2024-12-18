var http = require("http")
var formidable = require("formidable")
var fs = require("fs")


http.createServer((req, res)=>{
    if(req.url == "/upload"){
        let form = new formidable.IncomingForm()
        form.parse(req, (err, fildes, files)=>{
            let pathant = files.arquivo[0].filepath
            let pathnov = "C:/Users/POSITIVO/Documents/estudos/node js/Modulo Formidable/arquivos recebidos/" + files.arquivo[0].originalFilename
            fs.rename(pathant, pathnov, (err)=>{
                console.log(err)
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write("Arquivo salvo com sucesso") 
                res.end()   
            }) 
        })
    }else{
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<form action='upload' method='post'enctype='multipart/form-data'>")
        res.write("<input type='file' name='arquivo'><br>")
        res.write("<input type='submit' name='Enviar'>")
        res.write("</form>")
        res.end()
    }
}).listen(8080)
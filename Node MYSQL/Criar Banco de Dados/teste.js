const mysql = require('mysql')

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: ""
    }
)

con.connect((err)=>{
    if (err) throw err
    console.log("conexão bem sucedida")
    con.query("CREATE DATABASE IF NOT EXISTS db_node", (err, results)=>{
        if(err) throw err
        console.log("Banco de dados criado com sucesso")
        console.log(results)
    })
})
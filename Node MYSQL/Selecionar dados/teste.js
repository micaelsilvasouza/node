const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "db_node"
})

con.connect((err)=>{
    if (err) throw err
    console.log("Conexão bem sucedida")
    con.query("SELECT dia, descricao FROM agenda", (err,results, fields)=>{
        if(err) throw err
        console.log("Dados inseridos")
        console.log(results)
        console.log(fields)
    })
})
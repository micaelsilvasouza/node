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
    con.query("SHOW DATABASES", (err, results)=>{
        if(err) throw err
        //console.log(results)
        console.log(results[1].Database)
    })
})
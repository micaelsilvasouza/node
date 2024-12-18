const mysql = require('mysql')

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "db_node"
    }
)

con.connect((err)=>{
    if (err) throw err
    console.log("conexão bem sucedida")
    con.query("CREATE TABLE IF NOT EXISTS agenda("+
        "id INT PRIMARY KEY AUTO_INCREMENT,"+
        "dia DATE NOT NULL,"+
        "hora TIME,"+
        "descricao VARCHAR(300) NOT NULL"
    +")", (err, results)=>{
        if(err) throw err
        console.log("Tabela \'agenda\' criada com sucesso")
        console.log(results)
    })
})
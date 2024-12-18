const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "db_node"
})

con.connect((err)=>{
    let dados = [
        ["2024-10-12", "Descrição dos fatos para o dia 12"],
        ["2024-10-13", "Descrição dos fatos para o dia 13"],
        ["2024-10-14", "Descrição dos fatos para o dia 14"],
        ["2024-10-15", "Descrição dos fatos para o dia 15"],
        ["2024-10-16", "Descrição dos fatos para o dia 16"],
        ["2024-10-17", "Descrição dos fatos para o dia 17"],
        ["2024-10-18", "Descrição dos fatos para o dia 18"],
        ["2024-10-19", "Descrição dos fatos para o dia 19"],
        ["2024-10-20", "Descrição dos fatos para o dia 20"]
    ]

    if (err) throw err
    console.log("Conexão bem sucedida")
    con.query("INSERT INTO agenda (dia, descricao) VALUES ?", [dados], (err,results)=>{
        if(err) throw err
        console.log("Dados inseridos")
        console.log(results)
    })
})
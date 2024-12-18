const Sequelize = require("sequelize")
const sequelize = new Sequelize("db_node", "root", "", {
    host: "localhost", 
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso!")
}).catch((err)=>{
    console.log("Falha ao se conectar!")
})
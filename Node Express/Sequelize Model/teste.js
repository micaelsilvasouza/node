const Sequelize = require("sequelize")
const sequelize = new Sequelize("db_node", "root", "", {host: "localhost", dialect: "mysql"})
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    dataNascimento: {
        type: Sequelize.DATEONLY
    }
})

//Usuario.sync({force: true})

Usuario.create({
    nome: "André",
    sobrenome: "Silva",
    email: "andresilva@gmail.com",
    dataNascimento: "1990-02-15"
})
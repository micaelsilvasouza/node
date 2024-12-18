const TesteModel = require("../Coleção/mongo-db")

new TesteModel({
    title: "Foda-se",
    value: 100000
}).save().then(()=>{
    console.log("Created");
})
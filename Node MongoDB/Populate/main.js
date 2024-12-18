const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/blogs").then(()=>{
    console.log("Sucess conection")
}).catch(err => {
    console.log("No sucess conetion: ", err)
})

mongoose.model("users", Schema({
    nome: {
        type: String, 
        require: true 
    },
}))

//const User = mongoose.model("testes")

mongoose.model("posts", Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: "users",
        require: true
    },

    title: {
        type: String,
        require: true
    },

    body:{
        type: String,
        require: true
    }
}))
    
const User = mongoose.model("users")
const Post = mongoose.model("posts")

/*User.insertMany([
    {nome: "Arnaldo"},
    {nome: "Andre"},
    {nome: "Douglas"},
    {nome: "Firmino"},
    {nome: "Aldemar"},
    {nome: "Floriano"}
]).then(()=>{
    console.log("Usuarios criados com sucesso")
}).catch(err=>{
    console.log("Houve um error")
})*/

/*Post.insertMany([
    {user_id: "6760ac4b5bcb60df105afe5c", title: "Post Arnaldo", body: "Pontando"},
    {user_id: "6760ac4b5bcb60df105afe5c", title: "1 2 3 Teste", body: "Testando o id"},
    {user_id: "6760ac4b5bcb60df105afe5d", title: "Post André", body: "Pontando ao sobre eu"},
    {user_id: "6760ac4b5bcb60df105afe5e", title: "Post Firmino", body: "Postando algo"},
    {user_id: "6760ac4b5bcb60df105afe5e", title: "POST DOUGLAS", body: "Nada demais"}
]).then(()=>{
    console.log("Postagens criados com sucesso")
}).catch(err=>{
    console.log("Houve um error")
})*/

Post.find().populate("user_id").then(data=>{
    console.log(data)
}).catch(err => {
    console.log(err)
})
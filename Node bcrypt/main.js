const bcrypt = require("bcrypt")
let senha = "tentando"
var hashcrypt

bcrypt.genSalt(2, (err, salt)=>{
    bcrypt.hash(senha[0], salt, (err, hash)=>{
       hashcrypt = hash
       console.log(hash)
    })
})

bcrypt.compare(senha, hashcrypt, (err, batem)=>{
    console.log(batem)
})

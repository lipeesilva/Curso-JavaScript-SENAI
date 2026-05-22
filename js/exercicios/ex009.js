let user = "luiz"
let userAdmin = "admin"
let senha = 1234
let senhaAdmin = 123

if (user === userAdmin && senha === senhaAdmin){
    console.log("Bem vindo admin")
}
else if (user === "luiz" && senha === 1234){
    console.log("Bem vindo usuário")
}
else{
    console.log("Nível inválido")
}

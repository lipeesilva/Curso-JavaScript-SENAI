// VERIFICAR PELA IDADE, SE O VOTO É OBRIGATÓRIO, OPICIONAL OU NÃO VOTA!
// idade > 18       ->  Obrigatório
// idade < 16       ->  Não vota
// idade >= 16 < 18 ->  Voto opicional
// idade > 65       ->  Voto opicional

let idadePessoa = 66

if (idadePessoa < 16){
    console.log("Não vota!")
}
else if (idadePessoa < 18 || idadePessoa >= 65){
    console.log("Voto opcional!")
}
// else if (idadePessoa >= 65){
//     console.log("Voto opcional!")
// }
else {
    console.log("Voto obrigatório!")
}
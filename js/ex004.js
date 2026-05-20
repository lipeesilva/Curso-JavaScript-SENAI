// VERIFICAR MAIORIDADE
// RECEBER UMA IDADE
// SE A IDADE FOR MAIOR OU IGUAL A 18 -> RETORNAR MAIOR DE IDADE
// SE NÃO FOR -> MENOR DE IDADE

const idade = 17
const nome = "João"
const sobrenome = "Silva"


if (idade >= 18){
    // console.log(nome + ", com " + idade + " anos de idade, você é maior de idade!")
    console.log(`{Olá, ${nome} ${sobrenome}, com ${idade} anos de idade, você é de maior!`)
}
else{
    console.log(`Olá, ${nome} ${sobrenome}, com ${idade} anos de idade, você é de menor!`)
}
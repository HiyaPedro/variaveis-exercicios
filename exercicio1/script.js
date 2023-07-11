// como declarar variaveis
// para dados que vão ser modificados usamos let
//para dados que não não ser modificados usamos const
//padrão camel case nomeDoUsario
//tipos primitivos strings numbers boolean null undefinded
//para atribuição do valor usamos sinal de =


const nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é o seu idade?")

console.log(nome)

/* If I attributed a value to the variable 'nome' I would have written a name in quotation marks. 
This would return type string, a sequence of characters consiting of letters, numbers, or symbols. 
Strings in JavaScript are primitive data types and immutable or unchanging. */

console.log(idade)

/* If I attributed a value to the variable 'idade' I would have written a number.
This would return type number, also a primitive data type. JavaScript has only one type of number. 
Numbers can be written with or without decimals. */

console.log(typeof nome)
console.log(typeof idade)

//typeof é um comando de javascript que serve para verificar o tipo de uma variavel

/* after I atributed the prompt() to the value of each variable 'nome' and 'idade', and then executed a 'typeof' command.
They both returned a value of 'string'. Because all information that comes from a prompt returns a string prompt */

console.log("Ola", nome, "você tem", idade, "anos")

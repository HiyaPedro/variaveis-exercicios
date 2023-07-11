// Você foi contratade para criar um programa de RH que 

const nomeCompleto = prompt("Qual é o seu nome completo?")
const dataDeNacimento = prompt("Qual é sua data de nacimento?")
let endereço = prompt("Qual é o seu endereço?")
const cpf = +prompt("Qual é o seu CPF?")
const escolaridade = prompt("Qual é o seu nivel de escolaridade?")
let chn = confirm("Você tem CHN?")
let filhos = Number(prompt("Quantos filhos você tem?"))
let cargoAtual = prompt("Qual é os eu cargo atual?")
let salário = Number(prompt("Qual é o seu salário?"))
let recebeComissão = confirm("Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel")
const anoDeAdmissão = prompt("Ano de admissão?")


console.log(typeof nomeCompleto, typeof dataDeNacimento, typeof endereço, typeof cpf, typeof escolaridade, typeof chn, typeof filhos, typeof cargoAtual, typeof salário, typeof recebeComissão, typeof anoDeAdmissão)
console.log("A pessoa colaboradora se chama", nomeCompleto, "Sua data de nacimento é?", dataDeNacimento, "Seu endereço é?", endereço)


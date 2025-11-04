// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

const producao = []

console.log("=== Sistema de Controle de Produção ===")
let diasRegistrados = prompt("Quantos dias deseja registrar? ")
for(let i = 0; i < diasRegistrados; i++){
    producao.push(parseInt(prompt(`Digite a quantidade produzida no dia ${i + 1}: `)))
}

let total = 0
for(i = 0; i < producao.length; i++){
     total = total + producao[i]
}

let maior = producao[0]
let menor = producao[0]

for(i = 1; i < producao.length; i++) {
    if(producao[i] > maior){
        maior = producao[i]
    }
    if(producao[i] < menor){
        menor = producao[i]
    }
}

let media = total / producao.length

console.log("--- RELATÓRIO DE PRODUÇÃO ---")
console.log(`Produções registradas: [${producao}]`)
console.log(`Total produzido: ${total}`)
console.log(`Média diária: ${media}`)
console.log(`Maior produção: ${maior} (dia ${producao.indexOf(maior) + 1})`) 
console.log(`Menor produção: ${menor} (dia ${producao.indexOf(menor) + 1})`)
let crescente = producao.sort((a, b) => a - b)
console.log(`Ordem crescente: [${crescente}]`)
let decrescente = producao.sort((a, b) => b - a)
console.log(`Ordem decrescente: [${decrescente}]`)

if(media >= crescente[0] / 2){
    console.log("Produção estável!")
}else{
    console.log("Produção abaixo do ideal.")
}
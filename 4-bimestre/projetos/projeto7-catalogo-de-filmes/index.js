// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")();

let filme1 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme2 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme3 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme4 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme5 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme6 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme7 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme8 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme9 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}
let filme10 = { titulo: "" , genero: "" , ano: 0 , avaliacao: 0 ,}

const filme = {
  1: filme1,
  2: filme2,
  3: filme3,
  4: filme4,
  5: filme5,
  6: filme6,
  7: filme7,
  8: filme8,
  9: filme9,
  10: filme10,
}
for(let i = 1; i <= 10; i++){
    filme[i].titulo = prompt(`Qual o nome do filme${i}?`)
    filme[i].genero = prompt(`Qual o gênero do filme${i}?`)
    filme[i].ano = parseInt(prompt(`Qual o ano de lançamento do filme${i}?`))
    filme[i].avaliacao = parseFloat(prompt(`Qual a avaliação do filme${i}? 0 a 10`))
}
console.log("=== Catálogo de Filmes ===")
for(let i = 1; i <= 10; i++){
   
   console.log(`${i}. ${filme[i].titulo} - ${filme[i].genero}`)
}
let soma = 0
let melhoravaliacao = 0 
let melhorfilme = ""
for(let i = 1; i <= 10; i++){
    soma = soma + filme[i].avaliacao

    if(filme[i].avaliacao > melhoravaliacao){
        melhoravaliacao = filme[i].avaliacao
        melhorfilme = filme[i].titulo
    }
}
let media = soma / 10
console.log(`Filme mais bem avaliado:`)
console.log(`${melhorfilme} (${melhoravaliacao}/10)`)
console.log(`A média das avaliações é ${media.toFixed(2)}`)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }
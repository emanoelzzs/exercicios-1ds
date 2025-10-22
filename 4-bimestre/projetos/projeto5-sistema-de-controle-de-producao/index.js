// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()
let diaAtual = 0
let metaTurno
let continuarTurno
let totalPecas = 0
let resumoDias = ""

do {
    do {
        metaTurno = parseInt(prompt("Quantas peças devem ser produzidas nesse turno?: "))
    } while (typeof metaTurno !== 'number' || metaTurno !== metaTurno)

    let producaoAtual = 0
    while (producaoAtual < metaTurno) {
        producaoAtual++
        console.log(`Peça ${producaoAtual}, produzida com sucesso`)
    }
    if (producaoAtual === metaTurno) {
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada!")
    }
    for (let x = 1; x > 0; x--) {
        diaAtual++
        const linhaDia = `Dia ${diaAtual} foi produzido ${metaTurno} \n`
        resumoDias += linhaDia
        totalPecas += metaTurno
    }
    do {
        continuarTurno = prompt("Deseja simular outro turno? S/N: ").toUpperCase()
    } while (continuarTurno === "" || continuarTurno === null)

} while (continuarTurno == "S")

console.log("Encerrando sistema de produção")
console.log("Resumo dos dias anteriores:")
console.log(resumoDias)
console.log(`Total geral: ${totalPecas} peças fabricadas!`)


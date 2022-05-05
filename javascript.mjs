import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

let soma = 0
let count = 0
let media = 0

while (true) {
    let strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)
    if (strNota.toUpperCase() == 'N') {
        break
    }
    let nota = parseFloat(strNota)

    if (isNaN(nota)) {
        console.log("tu fez uma cagada, tente colocar número ao invés de letras: ")
        continue
    }

    if (nota < 0) {
        console.log("MANO, digita um valor maior que 0")
        continue
    }

    if (nota > 10) {
        console.log("O FPD, digita um numero menor que 10")
        continue
    }
    soma = soma + nota
    count++
}

if (count == 0) {
    console.log("nenhum valor digitado, não é possível calcular a média.")
    process.exit()
}

media = soma / count
console.log(`[ RESULTADO ] A média de todos os valores informados é`, media)
process.exit()
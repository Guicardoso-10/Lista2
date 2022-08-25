console.log("programa que lê e mostra 5 números digitados")
import {questionInt} from 'readline-sync'
const numero1 = questionInt("Digite o primeiro numero: ")
const numero2 = questionInt("Digite o segundo numero: ")
const numero3 = questionInt("Digite o terceiro numero: ")
const numero4 = questionInt("Digite o quarto numero: ")
const numero5 = questionInt("Digite o quinto numero: ")
console.log(`os números são: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}`)
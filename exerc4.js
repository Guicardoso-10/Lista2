import {questionInt} from 'readline-sync'

console.log("saiba o maior número dentre os cinco digitados")

const numeros = []

const numero1 = questionInt("Digite o primeiro numero: ")
const numero2 = questionInt("Digite o segundo numero: ")
const numero3 = questionInt("Digite o terceiro numero: ")
const numero4 = questionInt("Digite o quarto numero: ")
const numero5 = questionInt("Digite o quinto numero: ")

let maiorNumero = numero1
numeros.push(numero2)
numeros.push(numero3)
numeros.push(numero4)
numeros.push(numero5)

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if (maiorNumero < numero) {
        maiorNumero = numero
    }
}

import {questionInt} from 'readline-sync'
console.log("Digite dois números inteiros e veja o intervalo entre eles")
const numero1 = questionInt("Digite o primeiro numero: ")
const numero2 = questionInt("Digite o segundo numero: ")
console.log("O intervalo é: ")
for (let i = numero1 + 1; i < numero2; i++) {
    console.log(i)
}
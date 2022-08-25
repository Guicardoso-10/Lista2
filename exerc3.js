import {questionInt} from 'readline-sync'
const numero = questionInt("Digite um numero de 1 a 10: ")

if (numero >= 1 && numero <= 10) {
    console.log("tabuada do " + numero + ":")

    for (let i = 0; i <= 10; i++) {
        const multiplicacao = numero * i
        console.log(numero + "x" + i + " = " + multiplicacao)
    }
} else {
    console.log("numero inválido")
}
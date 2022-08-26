import {questionInt} from 'readline-sync'

let  lista = []

for (let i = 1; i <= 5; i++) {
    const numero = questionInt("Digite um numero inteiro: ")
    lista.push(numero)
}

console.log(lista)

let soma = lista[0]
let multiplicacao = lista[0]

for (let i = 1; i < lista.length; i++) {
    // soma = soma + lista[i]
    soma += lista[i]
    // multiplicacao = multiplicacao * lista[i]
    multiplicacao *= lista[i]
}

console.log("a soma dos números é: " + soma)
console.log("a multiplicação dos números é: " + multiplicacao)

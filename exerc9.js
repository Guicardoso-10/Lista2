import {questionInt} from 'readline-sync'

const lista = []
const pares = []
const impares = []

for (let i = 1; i <= 20; i++) {
    const numero = questionInt('Digite o numero ' + i + ": ")
    lista.push(numero)
}

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i]
    if (numero % 2) {
        impares.push(numero)
    } else {
        pares.push(numero)
    }
}

console.log(lista)
console.log("lista dos números pares: ", pares)
console.log("lista dos números ímpares: ", impares)

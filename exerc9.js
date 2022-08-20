import {questionInt} from 'readline-sync'
const lista = []
for (let i = 1; i <= 20; i++) {
    const numero = questionInt('Digite o numero ' + i + ":")
    lista.push(numero)
}
console.log(lista)
console.log("lista dos números pares: ")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {console.log(i)}
}
console.log("lista dos números ímpares:")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {console.log(i)}
}
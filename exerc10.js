import {questionInt} from 'readline-sync'
let  lista = []
for (let i = 1; i <= 5; i++) {
    const numero = questionInt("Digite um numero inteiro: ")
    lista.push(numero)
}
console.log(lista)
let soma = 0
for (let i = 0; i <= 4; i++) {
    soma = soma + lista[i]
}
console.log("a soma dos números é: " + soma)
let multiplicação = lista[0]
for (let i = 1; i <= 4; i++) {
    multiplicação = multiplicação * lista[i]
}
console.log("a multiplicação dos números é: " + multiplicação)

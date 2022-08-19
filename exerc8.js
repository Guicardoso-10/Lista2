console.log("lê uma lista de 10 números e os mostra na ordem inversa")
import {questionInt} from 'readline-sync'
const lista = []
for (let i = 1; i <= 10; i++) {
    const numero = questionInt('Digite o numero' + i + ":")
    lista.push(numero)
}
console.log(lista)
for (let i = 9; i >= 0; i--) {
    console.log(lista[i])
}
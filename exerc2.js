import {questionInt} from 'readline-sync'

const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
]

const numero = questionInt("digite um numero de 1 a 7: ")
const diaSemana = diasSemana[numero - 1]

if (diaSemana == undefined) {
    console.log("valor inválido")
} else {
    console.log("o dia da semana é: " + diaSemana)
}
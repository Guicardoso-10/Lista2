import {questionInt} from 'readline-sync'
let numero = questionInt("digite um numero de 1 a 7: ")
let diaSemana = null
switch (numero) {
    case 1: 
        diaSemana = "domingo"
        break
    case 2: 
        diaSemana = "segunda-feira"
        break
    case 3: 
        diaSemana = "terça-feira"
        break
    case 4:
        diaSemana = "quarta-feira"
        break
    case 5: 
        diaSemana = "quinta-feira"
        break
    case 6: 
        diaSemana = "sexta-feira"
        break
    case 7: 
        diaSemana = "sábado"
        break
    default: console.log("valor inválido")
    
}
if (diaSemana != null) {console.log("o dia da semana é:" + diaSemana)}
import {questionInt} from 'readline-sync'
const numero = questionInt("Digite um numero de 1 a 10: ")
while(numero <= 10) {
    console.log("tabuada do " + numero + ":")
    console.log(numero + "x0 = " + numero*0)
    console.log(numero + "x1 = " + numero *1)
    console.log(numero + "x2 = " + numero*2)
    console.log(numero + "x3 = " + numero*3)
    console.log(numero + "x4 = " + numero*4)
    console.log(numero + "x5 = " + numero*5)
    console.log(numero + "x6 = " + numero*6)
    console.log(numero + "x7 = " + numero*7)
    console.log(numero + "x8 = " + numero*8)
    console.log(numero + "x9 = " + numero*9)
    console.log(numero + "x10 = " + numero*10)
    break
}
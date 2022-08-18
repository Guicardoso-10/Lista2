console.log("saiba o maior número dentre os cinco digitados")
import {questionInt} from 'readline-sync'
const numero1 = questionInt("Digite o primeiro numero: ")
const numero2 = questionInt("Digite o segundo numero: ")
const numero3 = questionInt("Digite o terceiro numero: ")
const numero4 = questionInt("Digite o quarto numero: ")
const numero5 = questionInt("Digite o quinto numero: ")
if (numero1 >= numero2 && numero1 >= numero3 && numero1 >= numero4 && numero1 >= numero5) {
    console.log(numero1 + " é o maior número")
}
else if (numero2 >= numero1 && numero2 >= numero3 && numero2 >= numero4 && numero2 >= numero5) {
    console.log(numero2 + " é o maior número")
}
else if (numero3 >= numero1 && numero3 >= numero2 && numero3 >= numero4 && numero3 >= numero5){
    console.log(numero3 + " é o maior número")
}
else if (numero4 >= numero1 && numero4 >= numero2 && numero4 >= numero3 && numero4 >= numero5) {
    console.log(numero4 + " é o maior número")
}
else if (numero5 >= numero1 && numero5 >= numero2 && numero5 >= numero3 && numero5 >= numero4) {
    console.log(numero5 + " é o maior número")
}
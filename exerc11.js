import {questionInt} from 'readline-sync'
const peso = questionInt("informe o peso: ")
if (peso > 50) {
    const excesso = peso - 50
    const multa = excesso*4
    console.log("Você deve pagar: " + multa)
}
else {
    console.log("peso dentro do limite")
}

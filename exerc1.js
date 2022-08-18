import {questionInt} from 'readline-sync'
const produto1 = questionInt('informe o preço do primeiro produto: ')
const produto2 = questionInt('informe o preço do segundo produto: ')
const produto3 = questionInt('informe o preço do terceiro produto: ')
if (produto1 <= produto2 && produto1 <= produto3) {
    console.log("compre o primeiro produto")
}
else if (produto2 <= produto1 && produto2 <= produto3) {
    console.log("compre o segundo produto")
}
else if (produto3 <= produto1 && produto3 <= produto2) {
    console.log("compre o terceiro produto")
}
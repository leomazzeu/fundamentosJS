/*let frutaExistenteNoMercado = false
let temCPUSuficiente = true

//obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]

if (isNaN(saldo)) {
    console.log('valor inválido!')
    return;
} else {
    console.log('Valor válido')
    return;
}*/

let tipoCliente = 'premium'
const saldo = 19

if (saldo < 9) {
    tipoCliente = 'basic'
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = 'gold'
} else {
    tipoCliente = null // false
}

if (!tipoCliente) {
    tipoCliente = 'indefinido'
}

console.log('tipoDoCliente', tipoCliente)

//Ternário
const idade = 12
const resultado = idade >= 18 ? 'Pode dirigir': 'Não pode dirigir!'
console.log(resultado)

const item = '0'
console.log(!!item)
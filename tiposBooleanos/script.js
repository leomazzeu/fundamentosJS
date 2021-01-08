const podeDirigir = -1
if (podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0
if (!saldoEmConta) {
    console.log('Não tem saldo!')
}

// força o valor a true ou false
// de acordo com a tabela
const boolComString = 'Eae man!!'
console.log(!!boolComString, boolComString)

//negação
console.log('negação', !boolComString)

// negação + forçar a bool
console.log(
    'negação + forçar a bool',
    !(!!boolComString)
)
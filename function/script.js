/*function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é:`, valor1 + valor2)
}*/

// funções podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2
}

// boa prática passar o valor por variáveis e não direto para a função
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log(resultado)

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado
}

console.log(multiplicar(2, 4))

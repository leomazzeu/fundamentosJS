const itens = [
    1, 'computador', 0.22
]
console.log(typeof(itens)) // verificar o tipo do array
console.log(Array.isArray(itens)) // verificar se é array da forma correta

// ordenar
const numeros = [ 4, 6, 2, 1, 0]
console.log(numeros.sort()) // também funciona para textos
// o sort também recebe uma função como parâmetro

// juntar dois arrays
const novo = itens.concat([1, 2, 3])
console.log(novo)

// juntar arrays em uma string
console.log(itens.join('\n'))

// verificar indice do item no array
const index = itens.indexOf('computador')
console.log(index)
console.log(itens[index]) // mostra o item do index
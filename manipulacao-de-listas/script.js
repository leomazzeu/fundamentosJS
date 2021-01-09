// O primeiro índice será sempre 0 (zero)

let pokemons = ['Bulbassaur', 'Pikachu', 'Squirtle', 'Charmander', 'Lickitung', 'Cubone', 'Aipom']


console.log(typeof(pokemons)) //object
console.log(pokemons[0])
console.log(pokemons[1])
console.log(pokemons[4]) //undefined

console.log(pokemons.length) // quantidade de itens no array
pokemons.push('Charizard') // adicionou um item no final da lista

//remover ultimo da lista
const ultimo = pokemons.pop() // removeu do array e guardou o último da lista em uma const
console.log(ultimo)

//remover o primeiro da lista
const primeiro = pokemons.shift() // removeu do array e guardou o primeiro da lista em uma const
console.log(pokemons, primeiro)

//remover um item específico a partir de um índice
pokemons.splice(2, 1) // Qual item de inicio / quantos remover
console.log(pokemons)
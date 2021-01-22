/*const textoPar = 'par'
const textoImpar = 'impar'

for (let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O número ${index} é ${decisao}`)
}*/

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10), //ignora casa decimal
        nome: 'Zezinhoi',
        superPoder: 'Veloz'
    },

    {
        id: parseInt(Math.random()),
        nome: 'Marizinha',
        superPoder: 'Super Força do Universo'
    }
]

/*for (let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id},
        nome: ${item.nome},
        superPoder: ${item.superPoder}`
    )
}*/


//não precisa de um contador

for (const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome)
}

//não precisa de usar o index
for (const item of minhaListaDeTarefas) {
    console.log('Nome', item.nome)
}
const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log(heroi)
console.log('nome:', heroi.nome)
console.log('idade:', heroi['idade'])
console.log('sexo: ', heroi.sexo)
console.log('Não existe: ', heroi.naoExiste) // undefined

//adicionando um id no objeto
heroi.id = 0001
console.log(heroi)

// pegar as chaves do objeto
console.log(Object.keys(heroi))

// pegar os valores do objeto
console.log(Object.values(heroi))

// juntar objetos
const pessoa = {
    tamanho: '10 metros'
}
const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj)

//remover uma chave de um objeto
delete novoObj.nome
console.log(novoObj)
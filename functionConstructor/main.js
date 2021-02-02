function Person(name, idade) {
    this.name = name
    this.walk = function() {
        return this.name + ' que possui ' + this.idade + ' anos' + ' está andando'
    }
    this.idade = idade
}
const leo = new Person('Léo', 21)
const joao = new Person('João', 19)
console.log(leo.walk())
console.log(joao.walk())
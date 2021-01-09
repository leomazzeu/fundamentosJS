// Quando uma variavel tem o _ no ínicio significa que não pode ser acessado por fora, ou seja, é uma variável privada.

/*const pessoa = {
    _nome: '',
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    }
}

pessoa.nome = 'maria do ceú'
console.log(pessoa.nome)*/

const pessoa = {
    _nome: '',
    _idade: 20,
    get nome () {
        return this._nome
    },

    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },

    set idade(valor) {
        this._idade = valor
    }

}

pessoa.nome = 'maria do ceú'
console.log(pessoa.nome)
pessoa.idade = 15
console.log(pessoa.podeDirigir)
const funcionario1 = {
    nome: 'Bruna',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Marcela',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto (funcionario1.salarioBruto, funcionario1.desconto)
console.log(funcionario1)

funcionario2.salarioLiquido = calcularDesconto (funcionario2.salarioBruto, funcionario2.desconto)
console.log(funcionario2)
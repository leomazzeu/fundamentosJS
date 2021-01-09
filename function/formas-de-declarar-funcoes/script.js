function minhaFuncao1(param1) {
    return 'Olá Mundo!'
}

const minhaFuncao2 = function(param) {
    return 'Essa é uma função anônima'
}

const minhaFuncao3 = (param) => {
    return `Arrow function ${param}`
}

const minhaFuncao4 = param1 => `Na mesma linha ${param1}`

const obj1 = {
    minhaFuncao: parametro1 => `Dentro de objeto ${parametro1}`
}
console.log(obj1.minhaFuncao('teste'))
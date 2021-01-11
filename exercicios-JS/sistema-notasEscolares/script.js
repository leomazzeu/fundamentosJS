const nota = 1023

function score (nota) {
    resultado = ''
    if (nota >= 60 && nota <= 69) {
       resultado = 'Nota D'
    } else if (nota >= 70 && nota <= 79) {
        resultado = 'Nota C'
    } else if (nota >= 80 && nota <= 89) {
        resultado = 'Nota B'
    } else if (nota >= 90 && nota <= 100) {
        resultado = 'Nota A'
    } else if (nota < 60 && nota >= 0) {
        resultado = 'Nota F'
    } else {
        resultado = 'Nota inválida!'
    }
    return resultado;
}

console.log(score(-1))
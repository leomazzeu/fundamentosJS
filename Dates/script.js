// meses começam do 0

const dataAniversario = new Date(2020, 0, 20)
//console.log(dataAniversario)

const primeiraDataDoJs = new Date(0)
//console.log(primeiraDataDoJs.getTime())

const hoje = new Date()
//console.log(hoje.toString())
console.log(hoje.toLocaleDateString())

// formato global recomendado!
console.log(hoje.toISOString())

//dia de hoje
const dia = hoje.getDate()
hoje.setDate(dia + 5) // + 5 dias deposi de hoje
hoje.setHours( 10, 30, 0) // seta a hora de hoje
console.log(hoje)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuter: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

//comparação de datas
console.log(new Date(2020, 1, 20) > new Date(2000, 1, 1))
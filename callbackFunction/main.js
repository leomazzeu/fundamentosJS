function sayMyName(name) {
    console.log(name)
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)
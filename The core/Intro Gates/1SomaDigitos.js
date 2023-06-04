function soma(n) {
    let soma = 0
    const numeros = n.toString()
    const length = numeros.length
    for (let i = 0; i < length; i++) {
        soma += parseInt(numeros[i], 10)

    }

    console.log(soma)

}

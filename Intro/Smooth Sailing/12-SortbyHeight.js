function solution(a) {
    let indices = []
    a.map((numero, index) => {
        if (numero === -1) {
            indices.push(index)
        }

    })

    const numerosFiltrados = a.filter(numero => numero !== -1)

    const numerosFiltradosOrdenados = numerosFiltrados.sort((a, b) => a - b)
    const solution = a.map((numero, index) => {
        if (indices.includes(index)) {
            return -1
        }
        numero = numerosFiltradosOrdenados[0]
        numerosFiltradosOrdenados.shift()
        return numero
    })

}

let numbers = [10, 2, -1, 5, 1, -1, 9];

solution(numbers)
console.log(numbers)


const matrix = [[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]]

function solution(matrix) {


    let soma = 0
    let colunasInvalidas = []
    matrix.map((array, index) => {
        array.map((numero, index) => {

            if (numero <= 0) {
                return colunasInvalidas.push(index)
            } else if (colunasInvalidas.includes(index)) {
                return
            }

            return soma += numero
        })
        return soma
    })



}
solution(matrix)
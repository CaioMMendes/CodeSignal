const matrix = [[true, false, false, true],
[false, false, true, false],
[true, true, false, true]]

function solution(matrix) {
    let result = []
    matrix.map((array, indexMatrix, matrix) => {
        const newArray = array.map((number, index) => {
            let numero = 0
            // number && numero++
            array[index - 1] && numero++
            array[index + 1] && numero++
            matrix[indexMatrix - 1] && (matrix[indexMatrix - 1][index] && numero++,
                matrix[indexMatrix - 1][index - 1] && numero++,
                matrix[indexMatrix - 1][index + 1] && numero++
            )
            matrix[indexMatrix + 1] && (matrix[indexMatrix + 1][index] && numero++,
                matrix[indexMatrix + 1][index - 1] && numero++,
                matrix[indexMatrix + 1][index + 1] && numero++
            )
            return numero

        })
        result.push(newArray)
    })


    return result
}

console.log(solution(matrix))
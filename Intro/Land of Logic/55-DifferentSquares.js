

const matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]


function solution(matrix) {


    let matrixes = []
    for (let j = 0; matrix.length - 1 > j; j++) {
        for (let i = 0; matrix[0].length - 1 > i; i++) {
            const a = `[${matrix[j][i]}, ${matrix[j][i + 1]}, ${matrix[j + 1][i]}, ${matrix[j + 1][i + 1]}]`

            if (!matrixes.includes(a)) {
                matrixes.push(a)
            }

            // matrixes.push([matrix[j][i], matrix[j][i + 1], matrix[j + 1][i], matrix[j + 1][i + 1]])
        }
    }
    //     let diferentes = []
    //    matrixes.map((arr) => {
    //         erros = 0
    //         diferentes.map((arrdif) => {
    //             if (JSON.stringify(arrdif) !== JSON.stringify(arr)) {
    //                 erros++
    //             }




    //         })
    //         if (erros === diferentes.length) {
    //             diferentes.push(arr)
    //         }


    //     })


    // return diferentes.length

    return matrixes.length

}
//todo por algum motivo comparando do jeito que estava comentado dava erro em alguns testes



console.log(solution(matrix))



// const a = [1, 2]
// const b = [1, 2]

// console.log(JSON.stringify(a) === JSON.stringify(b))





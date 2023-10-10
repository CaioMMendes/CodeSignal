
const matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]]


function solution(matrix) {
    const x = matrix[0]
    const result = []
    const objects = []
    for (let i = 0; i < matrix.length - 1; i++) {


        for (let j = 0; j < x.length - 1; j++) {
            const objectTest = {
                a: matrix[i][j],
                b: matrix[i][j + 1],
                c: matrix[i + 1][j],
                d: matrix[i + 1][j + 1]

            }
            // const testando = objects.map((item) => {
            //     return JSON.stringify(item) === JSON.stringify(objectTest) ? false : true
            // })
            const testando = objects.some(item => (
                item.a === objectTest.a &&
                item.b === objectTest.b &&
                item.c === objectTest.c &&
                item.d === objectTest.d
            ));
            testando ? '' : result.push([matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]), objects.push(objectTest)
            console.log(objectTest)
        }
    }
    console.log(objects)
    console.log(result)
    console.log(JSON.stringify([{ a: 1, b: 2 }]) == JSON.stringify({ a: 1, b: 2 }))

    return result.length
}

console.log(solution(matrix))
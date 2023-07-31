
const image = [[36, 0, 18, 9],
[27, 54, 9, 0],
[81, 63, 72, 45]]


function solution(image) {
    const largura = image[0].length
    const altura = image.length
    const array = image.map((array, index) => {
        const a = []
        for (let i = 0; (largura - 2) > i; i++) {
            const soma = array[i] + array[i + 1] + array[i + 2]
            a.push(soma)
        }
        return a
    })

    const result = array.map((numero, index, array) => {
        const b = []
        for (let j = 0; (altura - 2) > j; j++) {
            const a = []
            for (let i = 0; (largura - 2) > i; i++) {
                const soma = array[j][i] + array[j + 1][i] + array[j + 2][i]
                a.push(Math.floor(soma / 9))
            }
            b.push(a)
        }
        return b
    })


    return result[0]

}


console.log(solution(image))



















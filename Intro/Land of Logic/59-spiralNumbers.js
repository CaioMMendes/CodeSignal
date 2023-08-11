






/*
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]] */

/* 
[[1, 2,   3,  4,  5, 6],
[20, 21, 22, 23, 24, 7],
[19, 32, 33, 34, 25, 8],
[18, 31, 36, 35, 26, 9],
[17, 30, 29, 28, 27, 10],
[16, 15, 14, 13, 12, 11]] */

const n = 5
function solution(n) {









    let matrix = []
    for (let linha = 0; n > linha; linha++) {
        let linhaMatrix = []
        for (let coluna = 0; n > coluna; coluna++) {
            linhaMatrix.push('A')

        }
        matrix.push(linhaMatrix)

    }
    let top = true
    let right = true
    let numeroAtual = 1
    let vezes = 0
    // if (n === 1) {
    //     return [1]
    // }
    if (n % 2 !== 0) {
        const number = Math.floor(n / 2)
        matrix[number][number] = n ** 2
    }
    while (numeroAtual < n ** 2) {

        // for (let i = 0; n > i; i++) {
        //     matrix[0][i] = numeroAtual
        //     numeroAtual++
        // }
        // if (top) {
        for (let i = 0; n - vezes * 2 > i; i++) {
            //todo top
            matrix[0 + vezes][i + vezes] = numeroAtual
            numeroAtual++

        }
        // } else {

        // }
        // if (right) {
        for (let i = 0; n - vezes * 2 - 2 > i; i++) {
            //todo right
            matrix[vezes + i + 1][n - 1 - vezes] = numeroAtual
            numeroAtual++

        }
        for (let i = 0; n - vezes * 2 > i; i++) {
            //todo bot
            matrix[n - vezes - 1][n - 1 - i - vezes] = numeroAtual
            numeroAtual++
        }
        // } else {
        for (let i = 0; n - vezes * 2 - 2 > i; i++) {
            //todo left
            matrix[n - vezes - i - 2][vezes] = numeroAtual
            numeroAtual++

            // }
        }





        right = !right
        top = !top
        vezes++
    }


    return matrix
}

console.log(solution(n))
















// for (; numeroAtual < (n ** 2) + 1;) {
//     let num = 0
//     let a = 0
//     let b = 0
//     let c = 0
//     let d = 0

//     if (numeroAtual <= n - 10) {
//         for (let i = 0; (n - a) > i;) {
//             matrix[0][a] = numeroAtual
//             a++
//             num++
//             numeroAtual++

//         }
//     } else {

//         for (let i = 0; (n - a - vezes) > i;) {
//             matrix[vezes + a][n - vezes] = numeroAtual


//             a++
//             num++
//             numeroAtual++

//         }
//         for (let j = 0; (n - b - vezes - 1) > j;) {
//             matrix[n - vezes][n - b - 2] = numeroAtual


//             b++
//             numeroAtual++

//         }









//         console.log('first', numeroAtual)



//     }
//     vezes++
// }



// console.log(numeroAtual)











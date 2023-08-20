
const n = 15

function solution(n) {

    let result = 0
    for (let i = 1; i < n; i++) {

        let soma = 0
        for (let j = i + 1; n >= soma; j++) {
            if (j === i + 1) {

                soma += i + j
            } else {
                soma += j
            }
            if (soma === n) {
                console.log(i, j)
                result++
            }
        }






    }
    return result
}



console.log(solution(n))
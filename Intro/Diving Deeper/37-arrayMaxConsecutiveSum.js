
const inputArray = [1, 3, 2, 4]
const k = 3

function solution(inputArray, k) {
    let solution = -Infinity
    for (let i = k - 1; inputArray.length > i; i++) {
        let soma = 0
        for (let j = 0; k > j; j++) {
            soma += inputArray[i - j]
        }
        if (soma > solution) {
            solution = soma
        }
    }

    return solution
}


console.log(solution(inputArray, k))
//resposta 9
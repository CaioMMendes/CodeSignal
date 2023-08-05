const n = 10
const firstNumber = 2

function solution(n, firstNumber) {

    return firstNumber >= n / 2 ? firstNumber - (n / 2) : firstNumber + (n / 2)

}

console.log(solution(n, firstNumber))

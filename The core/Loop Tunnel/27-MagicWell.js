
const a = 1
const b = 2
const n = 2

function solution(a, b, n) {

    let result = 0
    for (let i = 0; i < n; i++) {
        result += a * b
        a++
        b++



    }

    return result

}


console.log(solution(a, b, n))
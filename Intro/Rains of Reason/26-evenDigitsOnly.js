
const n = 642386


function solution(n) {
    const string = `${n}`.split('')
    const solution = string.map((number) => {
        if (+number % 2 === 0) {
            return true
        }
    })
    if (solution.includes(undefined)) { return false }
    return true
}

console.log(solution(n))
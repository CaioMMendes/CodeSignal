
const s = "cabca"

function solution(s) {
    const unique = [...new Set(s)]
    return unique.length

}
console.log(solution(s))

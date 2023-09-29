
const inputString = "00-1B-63-84-45-E6"

function solution(inputString) {
    return !!inputString.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)
}



console.log(solution(inputString))
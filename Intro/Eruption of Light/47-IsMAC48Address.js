
const inputString = "02-03-04-05-06-07-"

function solution(inputString) {
    const regex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/
    return regex.test(inputString)
}



console.log(solution(inputString))
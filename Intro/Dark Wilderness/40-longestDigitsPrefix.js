
const inputString = "123aa1"

function solution(inputString) {
    const digitosContinuosRegex = /\d+/;
    const digits = inputString.match(digitosContinuosRegex)
    if (!inputString.match(/^\d/)) {
        return ''
    }
    return digits.reduce((prev, current) => {
        return + prev <= +current ? prev = current : prev
    })
}

console.log(solution(inputString))

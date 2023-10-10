

const number = 23456
const width = 4

function solution(number, width) {
    let result
    const stringNumber = number.toString()
    if (stringNumber.length < width) {
        result = stringNumber.padStart(width, '0')
    } else if (stringNumber.length === width) {
        result = stringNumber
    } else {
        result = stringNumber.slice(stringNumber.length - width)
    }
    return result
}



console.log(solution(number, width))


const value1 = 15
const weight1 = 2
const value2 = 20
const weight2 = 3
const maxW = 2


function solution(value1, weight1, value2, weight2, maxW) {
    let value = 0

    if (value1 > value2 && weight1 <= maxW || (weight2 > maxW && weight1 <= maxW)) {
        value += value1
        if (weight2 <= maxW - weight1) {
            value += value2
        }
    } else if (value2 > value1 && weight2 <= maxW || (weight1 > maxW && weight2 <= maxW)) {
        value += value2
        if (weight1 <= maxW - weight2) {
            value += value1
        }
    } else {
        value1 >= value2 && weight1 <= maxW ? value = value1 :
            value2 >= value1 && weight2 <= maxW ? value = value2 : ''
    }
    return value

}

console.log(solution(value1, weight1, value2, weight2, maxW))







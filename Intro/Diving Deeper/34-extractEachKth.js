
const inputArray = [2, 4, 6, 8, 10]
const k = 2


function solution(inputArray, k) {

    return inputArray.filter((number, index) => (index + 1) % k !== 0)



}


console.log(solution(inputArray, k))





// return inputArray.filter((number) => Number.isInteger(Math.pow(number, 1 / k)))
// return inputArray.filter((number) => Number.isInteger(number / k))
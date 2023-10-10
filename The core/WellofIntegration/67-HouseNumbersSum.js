
const inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2]


function solution(inputArray) {
    let result = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            break
        }
        result += inputArray[i]
    }

    return result
}



console.log(solution(inputArray))
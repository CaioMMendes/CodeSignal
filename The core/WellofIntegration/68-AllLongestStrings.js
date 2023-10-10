

const inputArray = ["aba", "aa", "ad", "vcd", "aba"]

function solution(inputArray) {
    let result = []
    let longestString = ''
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestString) {
            result = []
            result.push(inputArray[i])
            longestString = inputArray[i].length
        } else if (inputArray[i].length === longestString) {
            result.push(inputArray[i])
        }
    }

    return result
}



console.log(solution(inputArray))
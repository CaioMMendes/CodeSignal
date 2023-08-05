const inputArray = [1, 2, 1]
const elemToReplace = 1
const substitutionElem = 3


function solution(inputArray, elemToReplace, substitutionElem) {

    const solution = inputArray.map((number) => {
        if (number === elemToReplace) {
            return substitutionElem
        }
        return number
    })
    return solution
}

console.log(solution(inputArray, elemToReplace, substitutionElem))
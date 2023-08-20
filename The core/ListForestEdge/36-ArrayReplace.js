

const inputArray = [1, 2, 1]
const elemToReplace = 1
const substitutionElem = 3


function solution(inputArray, elemToReplace, substitutionElem) {

    return inputArray.map((element) => (
        element === elemToReplace ? substitutionElem : element
    ))


}


console.log(solution(inputArray, elemToReplace, substitutionElem))
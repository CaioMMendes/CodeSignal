
const inputString = "tandemtandem"

function solution(inputString) {
    if (inputString.length % 2 !== 0) { return false }
    const primeiraMetade = inputString.slice(0, inputString.length / 2)
    const segundaMetade = inputString.slice(inputString.length / 2)
    return primeiraMetade === segundaMetade
}


console.log(solution(inputString))
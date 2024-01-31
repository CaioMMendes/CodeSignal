
const number = 'G'

function solution(number) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const stringIndex = alphabet.indexOf(number)
    const result = []
    for (let i = 0; i <= Math.floor(stringIndex / 2); i++) {
        result.push(`${alphabet[i]} + ${alphabet[stringIndex - i]}`)

    }
    return result
}



console.log(solution(number))
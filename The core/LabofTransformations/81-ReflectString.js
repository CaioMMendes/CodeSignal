
const inputString = "name"

function solution(inputString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetLength = alphabet.length - 1
    const splited = inputString.split('')
    const result = splited.map((string) => {
        const stringIndex = alphabet.indexOf(string)
        console.log(stringIndex)
        return alphabet[alphabetLength - stringIndex]
    })

    console.log(result)
    return result.join('')
}



console.log(solution(inputString))
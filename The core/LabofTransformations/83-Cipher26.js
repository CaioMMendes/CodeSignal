
const message = "taiaiaertkixquxjnfxxdh"
console.log('------------------------')
function solution(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const splited = message.split('')
    let accumulated = 0
    const result = splited.map((string) => {
        const stringIndex = alphabet.indexOf(string)
        const value = (stringIndex - accumulated) % 26
        const a = value < 0 ? 26 - Math.abs(value) : value

        accumulated += value
        return alphabet[a]
    })
    return result.join('')
}


console.log(solution(message))
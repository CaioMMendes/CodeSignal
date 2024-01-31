
const cipher = "10197115121"


function solution(cipher) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let accumulated = ''
    let result = ''
    for (let i = 0; i < cipher.length; i++) {
        accumulated += cipher[i]
        const charCode = String.fromCharCode(accumulated)
        if (alphabet.includes(charCode)) {
            accumulated = ''
            result += charCode
        }

    }
    return result
}



console.log(solution(cipher))

const note = "you'll n4v4r 6u4ss 8t: cdja"


function solution(note) {


    const alphabet = 'abcdefghij'
    const numbers = '0123456789'
    const splited = note.split('')
    const result = splited.map((string) => {
        const indexAlphabet = alphabet.indexOf(string)
        const indexNumber = numbers.indexOf(string)
        if (indexAlphabet !== -1) {
            return numbers[indexAlphabet]
        } else if (indexNumber !== -1) {
            return alphabet[indexNumber]
        } else {
            return string
        }


    })
    return result.join('')
}



console.log(solution(note))
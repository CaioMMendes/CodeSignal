const inputString = "crazy"


function solution(inputString) {
    const alphabetic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const string = inputString.split('')
    const newString = string.map((string) => {
        const stringIndex = alphabetic.indexOf(string)
        if (stringIndex === 25) {
            return 'a'
        }
        return alphabetic[stringIndex + 1]
    })
    const result = newString.join('')


    return result
}


console.log(solution(inputString))
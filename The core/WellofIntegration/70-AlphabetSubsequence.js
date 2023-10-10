

const s = "effg"

function solution(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const splited = s.split('')
    let lastIndex = -1
    const result = splited.map((string) => {
        if (alphabet.indexOf(string) > lastIndex) {
            lastIndex = alphabet.indexOf(string)
            return true
        }
        return false
    })
    return !result.includes(false)

}



console.log(solution(s))
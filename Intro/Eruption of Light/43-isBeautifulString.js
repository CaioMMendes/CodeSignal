
const inputString = "zaa"
// const a = inputString.split('').sort()

function solution(inputString) {
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ocorrencia = Infinity
    let result = true
    const uniqueStrings = [...new Set(inputString)].sort()
    console.log(uniqueStrings)
    if (!uniqueStrings.includes('a')) {
        return false
    }
    uniqueStrings.map((letter) => {

        const a = inputString.split('').filter(char => char === letter).length
        const b = inputString.split('').filter(char => char === alfabeto[alfabeto.indexOf(letter) - 1]).length
        console.log(a)
        if (b >= a || letter === 'a') {
            ocorrencia = a
        } else {
            console.log('first')
            result = false
        }
    })
    return result
}


console.log(solution(inputString))
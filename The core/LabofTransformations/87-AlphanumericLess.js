

// const s1 = "a"
const s1 = "000"
const s2 = "0000"

function solution(s1, s2) {

    const alphabetic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const s1Tokens = []
    const s2Tokens = []
    let actualS1 = ''
    let actualS2 = ''
    for (let i = 0; i < s1.length; i++) {

        if (alphabetic.includes(s1[i])) {
            actualS1.length > 0 && s1Tokens.push(actualS1)
            s1Tokens.push(s1[i])
            actualS1 = ''
        } else {

            actualS1 += s1[i]
        }


        if (actualS1.length > 0 && i === s1.length - 1) {
            s1Tokens.push(actualS1)
        }

    }
    for (let i = 0; i < s2.length; i++) {
        if (alphabetic.includes(s2[i])) {
            actualS2.length > 0 && s2Tokens.push(actualS2)
            s2Tokens.push(s2[i])
            actualS2 = ''
        } else {

            actualS2 += s2[i]
        }


        if (actualS2.length > 0 && i === s2.length - 1) {
            s2Tokens.push(actualS2)
        }

    }

    const result = []
    const menorToken = s1Tokens.length > s2Tokens.length ? s2Tokens.length : s1Tokens.length
    console.log('menorToken', menorToken)
    for (let j = 0; j < menorToken; j++) {
        const isNumber1 = isNaN(Number(s1Tokens[j])) ? s1Tokens[j] : Number(s1Tokens[j])
        const isNumber2 = isNaN(Number(s2Tokens[j])) ? s2Tokens[j] : Number(s2Tokens[j])
        console.log(isNumber1, isNumber2)
        const array = [isNumber1, isNumber2].sort()
        console.log(array)
        if ((array[0] === isNumber1 && array[1] === isNumber2) && (menorToken - 1 === j && isNumber1 === isNumber2 && s1Tokens.length < s2Tokens.length)) {
            result.push(true)
            break
        } else if ((array[0] === isNumber1 && array[1] === isNumber2) && (menorToken - 1 === j && isNumber1 === isNumber2 && s1Tokens.length >= s2Tokens.length)) {
            result.push(false)
            break
        }
        if ((array[0] === isNumber1 && array[1] === isNumber2)) {
            result.push(true)
        } else {
            result.push(false)
        }

    }
    return !result.includes(false)
}



console.log(solution(s1, s2))
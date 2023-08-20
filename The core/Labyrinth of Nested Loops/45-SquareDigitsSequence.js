
const a0 = 13

function solution(a0) {
    let result = 1
    let number = a0
    let soma = 0
    let sortedNumbers = []
    while (soma !== a0) {
        const splited = number.toString().split('')
        console.log(splited)
        soma = splited.reduce((acc, cur) => {
            return acc + (Number(cur) ** 2)

        }, 0)

        if (a0 !== 1) {

            result++
        }
        number = soma
        if (number === 1) {
            result++
            break
        }
        if (sortedNumbers.includes(soma)) {
            break
        }

        sortedNumbers.push(soma)
    }

    return result
}

console.log(solution(a0))
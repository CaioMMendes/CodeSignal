
const inputString = "Your payment method is invalid"

function solution(inputString) {
    const numeros = inputString.match(/\d+/g);
    if (numeros === null) {
        return 0
    }
    const result = numeros.reduce((acc, current) => {
        return +acc + +current
    })
    return +result
}


console.log(solution(inputString))
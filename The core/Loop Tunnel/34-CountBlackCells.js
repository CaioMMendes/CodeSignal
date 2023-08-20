
const n = 66666
const m = 88888

function solution(n, m) {

    const maior = Math.max(n, m)
    const menor = Math.min(n, m)
    if (n === m) {
        return 1 + ((n - 1) * 3)
    }
    // return Math.floor(maior / 2) * menor
    let result = 0
    let numeroAnterior = 0
    for (let i = 0; maior > i; i++) {
        const y = (menor / maior) * i
        result++
        if (y === Math.floor(y) && i !== 0) {
            result++
        }
        else if (numeroAnterior < Math.floor(y)) {
            numeroAnterior = Math.floor(y)
            result++
        }
    }
    return result





}



console.log(solution(n, m))
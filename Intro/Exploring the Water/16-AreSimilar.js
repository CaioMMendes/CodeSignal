
const a = [1, 2]
const b = [1, 2, 4]
//dado dois arrays se der para inverter a posição de dois numeros e gerar o outro
//array retornar true se não retorna false
// console.log(a.every((item) => b.includes(item)))
function solution(a, b) {
    // let errors = 0
    // for (let i = 0; a.length > i; i++) {
    //     if (a[i] !== b[i]) {
    //         errors++
    //     }
    // }
    // if (errors <= 2 && a.every((item) => b.includes(item)) && a.length === b.length && b.every((item) => a.includes(item))) {
    //     return true
    // } else {
    //     return false
    // }
    res = a.map((e, i) => e == b[i] ? null : e).filter(Boolean).length
    hasSameElements = JSON.stringify(a.sort((a, b) => a - b)) == JSON.stringify(b.sort((a, b) => a - b))
    return hasSameElements && (res == 2 || res == 0)
}

console.log(solution(a, b))
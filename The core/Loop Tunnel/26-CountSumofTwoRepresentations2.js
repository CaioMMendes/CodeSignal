
// const n = 6
// const l = 2
// const r = 4

const n = 93
const l = 24
const r = 58

//l ≤ A ≤ B ≤ r
//achar o numero de formas de gerar n somando A e B
function solution(n, l, r) {
    let menorValorSoma = l
    let maiorValorSoma = n - l
    if (maiorValorSoma < l) { return 0 }
    if (maiorValorSoma > r) {
        const diferenca = maiorValorSoma - r
        maiorValorSoma = r
        menorValorSoma = l + diferenca
    }
    return Math.floor((maiorValorSoma - menorValorSoma) / 2) + 1




}


console.log(solution(n, l, r))
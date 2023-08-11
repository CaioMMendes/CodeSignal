

const n = 152

function solution(n) {
    const string = String(n)
    const splited = string.split('')
    let maiorNumero = -Infinity
    for (let i = 0; string.length > i; i++) {
        let numeroTeste = [...splited]
        numeroTeste.splice(i, 1)
        numeroTeste = numeroTeste.join('')
        if (+numeroTeste > maiorNumero) {
            maiorNumero = numeroTeste
        }
    }
    return +maiorNumero
}



console.log(solution(n))
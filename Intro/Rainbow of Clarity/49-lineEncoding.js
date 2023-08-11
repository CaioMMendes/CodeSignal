
const s = "aabbbccccde"

function solution(s) {


    let letraAtual = s[0]
    let contador = 0
    let result = []
    for (let i = 0; s.length > i; i++) {

        if (letraAtual === s[i]) {
            contador++
        }
        if (letraAtual !== s[i]) {
            result.push(contador > 1 ? contador : '', letraAtual)
            letraAtual = s[i]

            contador = 1
        }
        if (i === s.length - 1) {
            letraAtual = s[i]
            result.push(contador > 1 ? contador : '', letraAtual)
        }


    }

    result = result.join('')
    return result



}



console.log(solution(s))
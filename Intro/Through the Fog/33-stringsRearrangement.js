const inputArray = ["f",
    "g",
    "a",
    "h"]


const a = []
function solution(inputArray) {
    return permutacao([], inputArray)
}

const permutacao = (vetor, restante) => {
    const length = restante.length
    if (restante.length === 0) {


        //todo testar se o vetor satisfaz os requisitos
        //todo a proxima palavra tem que ser igual a anterior com diferença de uma letra
        a.push(vetor)
        let b = false
        for (let i = 0; vetor.length - 1 > i; i++) {
            let errors = 0
            for (let j = 0; vetor[i].length > j; j++) {
                vetor[i][j] === vetor[i + 1][j] ? '' : errors++
            }
            errors === 1 ? b = true : ''
            if (errors !== 1) {
                b = false
                break
            }
        }
        // console.log(vetor)
        return b

    }
    for (let i = 0; length > i; i++) {
        vetor.push(restante[i])
        let copy = [...restante]
        copy.splice(i, 1)
        let resposta = permutacao(vetor, copy)
        if (resposta) {
            return true
        }
        vetor.pop()
    }
    return false
}

function fatorial(n) {
    if (n < 0) {
        throw new Error('Não podi')
    }
    if (n === 1 || n === 0) {
        return 1
    }
    return n * fatorial(n - 1);
}


// console.log(fatorial(5))

console.log(solution(inputArray))

const n = 17

function solution(n) {

    let fatorial = 1
    let vezes = 1
    while (n > fatorial) {
        fatorial = fatorial * vezes
        vezes++
    }
    return fatorial
}



console.log(solution(n))
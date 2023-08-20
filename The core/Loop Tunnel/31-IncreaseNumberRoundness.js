
const n = 902200100

function solution(n) {
    let numeroDeZerosFinal = 0

    const regex = /0+/g

    const splited = n.toString() + '0'
    const zeros = splited.match(regex);

    return zeros.length > 1




}


console.log(solution(n))
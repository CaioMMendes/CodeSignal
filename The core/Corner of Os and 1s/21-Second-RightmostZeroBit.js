
const n = 37
function solution(n) {
    return 2 ** (n.toString(2).split('').reverse()).indexOf('0', (n.toString(2).split('').reverse()).indexOf('0') + 1);
}


console.log(solution(n))
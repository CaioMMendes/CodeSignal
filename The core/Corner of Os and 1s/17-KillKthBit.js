
const n = 2734827
const k = 4


function solution(n, k) {


    return (n & ~(1 << k - 1));

    return parseInt(n.toString(2).split('').slice(0, n.toString(2).split('').length - k).concat(0, n.toString(2).split('').slice(n.toString(2).split('').length - k + 1)).join(''), 2)







}


console.log(solution(n, k))
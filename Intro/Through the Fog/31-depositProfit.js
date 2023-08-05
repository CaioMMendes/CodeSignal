const deposit = 1
const rate = 100
const threshold = 64

function solution(deposit, rate, threshold) {

    const tempo = (Math.log(threshold / deposit)) / (Math.log(1 + (rate / 100)))
    return Math.ceil(Math.abs(tempo))
}
console.log(solution(deposit, rate, threshold))


const candlesNumber = 5
const makeNew = 2

function solution(candlesNumber, makeNew) {

    let leftFlowers = 0
    let result = 0
    for (let i = 0; candlesNumber > 0; i++) {


        candlesNumber--
        leftFlowers++
        if (leftFlowers === makeNew) {
            leftFlowers = 0
            candlesNumber++
        }
        result = i + 1
    }
    return result

}


console.log(solution(candlesNumber, makeNew))
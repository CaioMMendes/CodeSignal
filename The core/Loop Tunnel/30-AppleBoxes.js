
const k = 5

function solution(k) {

    let yellowApples = 0
    let redApples = 0
    for (let i = 0; i <= k; i++) {

        if (i % 2 !== 0) {
            yellowApples += i ** 2
        } else {
            redApples += i ** 2
        }


    }

    return redApples - yellowApples
}


console.log(solution(k))
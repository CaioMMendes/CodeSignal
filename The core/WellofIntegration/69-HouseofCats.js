
const legs = 44

function solution(legs) {
    const result = []

    for (let i = 0; i <= legs / 2; i++) {
        const remainingLegs = legs - (i * 2)

        if (remainingLegs % 4 === 0) {
            result.push(i)
        }
    }
    return result
}



console.log(solution(legs))
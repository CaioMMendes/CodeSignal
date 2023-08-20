

const n = 137


function solution(n) {

    let result = false
    for (let i = 0; i <= 400; i++) {

        const number = i ** 2
        if (n % number === 0) {
            for (let j = 1; j < 20; j++) {
                const a = i ** j
                if (n === a) {
                    result = true
                    break
                } else if (i === 400) {
                    result = false
                    break
                }

            }
        }

    }

    return result
}



console.log(solution(n))
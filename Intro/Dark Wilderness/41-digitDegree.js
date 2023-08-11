

const n = 5

function solution(n) {
    if (String(n).length === 1) {
        return 0
    } else {
        let numero = n
        let result = 0
        for (let i = 0; String(numero).length !== 1; i++) {
            const split = String(numero).split('')
            numero = 0
            split.map((number) => {
                numero += +number
            })
            result = i + 1
        }
        return result
    }
}


console.log(solution(n))
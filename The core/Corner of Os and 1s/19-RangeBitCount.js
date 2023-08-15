
const a = 2
const b = 7

function solution(a, b) {
    const array = []
    while (a <= b) {
        array.push(a)
        a++
    }
    let result = 0
    array.map((num) => {
        const binary = num.toString(2)
        result += binary.split(1).length - 1
    })

    return result
}


console.log(solution(a, b))
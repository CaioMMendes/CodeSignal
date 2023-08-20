


const inputArray = [2, 3, 2, 3, 4, 5]
const l = 2
const r = 4


function solution(inputArray, l, r) {
    const result = []
    inputArray.map((number, index) => {
        if (index >= l && index <= r) {
            return
        }
        result.push(number)

    })
    return result
}


console.log(solution(inputArray, l, r))
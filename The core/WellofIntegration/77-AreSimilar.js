
const a = [1, 2, 3,]
const b = [2, 1, 3]

function solution(a, b) {

    const result = a.map((number, index) => {
        return number === b[index] ? true : [number, b[index]]
    })
    const errors = result.filter((item) => item !== true)
    return errors.length === 0 || (errors.length === 2 && errors[0][0] === errors[1][1] && errors[0][1] === errors[1][0]) ? true : false
}



console.log(solution(a, b))
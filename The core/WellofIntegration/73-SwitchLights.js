
const a = [1, 1, 1, 1, 1]

function solution(a) {
    let array = []
    a.map((number, index) => {

        array.push(number)
        if (number === 1) {
            array = array.map((numberArray) => {
                return numberArray === 1 ? 0 : 1
            })
        }

    })
    return array


}


console.log(solution(a))
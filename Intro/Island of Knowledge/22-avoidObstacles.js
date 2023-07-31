

const inputArray = [1, 4, 10, 6, 2]

function solution(inputArray) {

    let result
    let error = 0
    for (let i = 2; error === 0; i++) {
        let success = 0
        inputArray.map((numero, index) => {
            if (numero % i === 0) {
                success = 1
            }
        })
        if (success === 0) {
            error = 1
            result = i
            return i
        }

    }






}


console.log(solution(inputArray))




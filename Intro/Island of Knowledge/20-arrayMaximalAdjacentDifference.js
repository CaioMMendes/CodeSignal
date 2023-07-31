

const inputArray = [2, 4, 1, 0]

function solution(inputArray) {
    let max = 0

    inputArray.map((number, index) => {

        if (Math.abs(number - inputArray[index - 1]) > max && index !== 0) {
            max = Math.abs(number - inputArray[index - 1])
        }


    })

    return max

}

console.log(solution(inputArray))
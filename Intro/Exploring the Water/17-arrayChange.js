const inputArray = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]

function solution(inputArray) {
    let counter = 0
    let lastNumber
    inputArray.map((number, index) => {



        if (index !== 0 && number <= lastNumber) {
            counter += Math.abs(lastNumber - number) + 1
            lastNumber = Math.abs(lastNumber - number) + 1 + number
            return counter
        }
        else if (index === 0 || number > lastNumber) {
            return lastNumber = number
        }


    })

    return counter
}

console.log(solution(inputArray))
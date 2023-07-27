const inputArray = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]

function solution(inputArray) {
    let counter = 0
    let lastNumber
    inputArray.map((number, index) => {



        if (index !== 0 && number <= lastNumber) {
            counter += Math.abs(lastNumber - number) + 1
            lastNumber = Math.abs(lastNumber - number) + 1 + number
            // console.log(lastNumber)
            console.log('numero', number, 'quantidade', Math.abs(lastNumber - number) + 1)
            return counter
        }
        else if (index === 0 || number > lastNumber) {
            console.log('numero', number, 'quantidade', 0)
            return lastNumber = number
        }
        // if (index !== 0) {
        //     console.log('teste', Math.abs(number - lastNumber + 1))
        //     console.log('last', lastNumber)
        //     lastNumber = (Math.abs(number - lastNumber) + 1)
        //     return number <= lastNumber ? counter += (Math.abs(number - lastNumber) + 1) : ''
        // }
        // else {
        //     lastNumber = number
        // }


        // if (index !== 0) {
        //     for (; lastNumber >= number;) {
        //         console.log('for', lastNumber, number)
        //         number++
        //         counter++
        //     }
        //     lastNumber = number
        // } else {
        //     lastNumber = number
        // }


    })

    return counter
}

console.log(solution(inputArray))
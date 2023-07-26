

const inputArray = ["aba", "aa", "ad", "vcd", "aba"]


function solution(inputArray) {
    let strings = []
    let stringLength = 0

    inputArray.map((string) => {
        if (string.length === stringLength) {
            stringLength = string.length
            return strings.push(string)
        } else if (string.length > stringLength) {
            stringLength = string.length
            strings = []
            return strings.push(string)
        }
    })
    return strings
}

solution(inputArray)

//dado um array de strings pegar o maior lenght
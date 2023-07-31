
const inputString = "64.233.161.00"

function solution(inputString) {

    const string = inputString.split('.')
    const regex = /^[0-9]+$/
    if (string.length !== 4 || string.includes(' ')) {
        return false
    }
    const map = string.map((number) => {
        if (+number > 255 || +number < 0 || !number.match(regex) || (number.includes('0') && number.length > 1 && +number !== 0) || (number.includes('0') && number.length > 1 && +number === 0)) {
            return false
        }
    })

    if (map.includes(false)) { return false } else { return true }


}


console.log(solution(inputString))
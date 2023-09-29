

const inputString = "AaBaa"


function solution(inputString) {

    const lower = inputString.toLowerCase()
    const splited = lower.split('')

    for (let index = 0; index < splited.length / 2; index++) {
        if (splited[index] !== splited[splited.length - index - 1]) {
            return false
        }
    }


    return true

}


console.log(solution(inputString))
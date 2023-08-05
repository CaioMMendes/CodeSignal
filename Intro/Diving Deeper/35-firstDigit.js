
const inputString = "var_0__Int"


function solution(inputString) {
    const regex = /^\d$/
    for (let i = 0; inputString.length > i; i++) {
        if (inputString[i].match(regex)) {
            return inputString[i]
        }


    }
}

console.log(solution(inputString))

const name = "var_1__Int"

function solution(name) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/

    if (name.match(regex)) { return true }
    return false
}


console.log(solution(name))
const inputString = "zyyzzzzz"

function solution(inputString) {
    const counts = {}
    let errors = 0
    const string = inputString.split('')
    string.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    for (let charactere in counts) {
        if (counts[charactere] % 2 !== 0) {
            errors++
        }
    }
    if (errors > 1) { return false } else { return true }
}


console.log(solution(inputString))



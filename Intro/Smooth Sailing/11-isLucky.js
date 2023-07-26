const n = 239017


function solution(n) {
    const string = n.toString()
    let firstSum = 0
    let secondSum = 0
    for (let i = 0; string.length / 2 > i; i++) {
        firstSum += (+string[i])

    }
    for (let i = string.length / 2; string.length > i; i++) {
        secondSum += (+string[i])
    }
    if (firstSum === secondSum) {
        return true
    }
    return false
}


solution(n)
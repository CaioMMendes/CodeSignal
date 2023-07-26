function solution(a, b) {
    if (a !== b) {
        if ((a < b) && (a - b) ** 2 !== 1) {
            console.log((a < b) && (a - b) % 2 === 0)
            return false
        }
        return true
    }
    return false
}
solution(5, 10)
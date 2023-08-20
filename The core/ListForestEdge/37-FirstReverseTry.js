
const arr = []


function solution(arr) {
    arr.length > 0 ? [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]] : ''
    return arr
}

console.log(solution(arr))
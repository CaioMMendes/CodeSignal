
const n = 74
function solution(n) {
    return (function (input) {
        let bytes = n.toString(2)
        if (bytes.length % 2 !== 0) {
            bytes = bytes.padStart(bytes.length + 1, '0')
        }
        const splitStrings = bytes.match(/.{1,2}/g)
        const array = splitStrings.map((string) => {
            if (string.length === 1) {
                string = string.padStart(2, '0')
            }
            return string.split('').reverse().join('')
        })
        return parseInt(array.join(''), 2)
    })(n);
}


console.log(solution(n))
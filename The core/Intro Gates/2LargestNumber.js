function solution(n) {

    const digits = ((1) * (10 ** (n - 1)))
    const numberString = digits.toString().replace(/0/g, '1')
    const numberTransformed = parseInt(numberString, 10)
    const final = numberTransformed * 9
    return final

}
solution(2)

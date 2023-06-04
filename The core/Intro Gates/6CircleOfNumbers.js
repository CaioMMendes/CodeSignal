function solution(n, firstNumber) {

    const half = n / 2;
    const opostNumber = half + firstNumber
    if (opostNumber >= n) {
        return firstNumber - half
    }
    return opostNumber
}
solution(10, 0)
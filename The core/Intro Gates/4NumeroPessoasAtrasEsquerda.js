function solution(nCols, nRows, col, row) {
    const numeroDePessoas = (nCols - (col - 1)) * (nRows - row)
    return numeroDePessoas
}
solution(16, 11, 5, 3)
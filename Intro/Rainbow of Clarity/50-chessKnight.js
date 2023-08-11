

const cell = "c2"

function solution(cell) {
    const positionsLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const positionsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8']
    const indexCellLetter = positionsLetters.indexOf(cell[0])
    const indexCellNumber = positionsNumbers.indexOf(cell[1])
    let contador = 0
    // cima
    positionsLetters[indexCellLetter + 1] && positionsNumbers[indexCellNumber + 2] ? contador++ : ''
    positionsLetters[indexCellLetter - 1] && positionsNumbers[indexCellNumber + 2] ? contador++ : ''
    //baixo
    positionsLetters[indexCellLetter + 1] && positionsNumbers[indexCellNumber - 2] ? contador++ : ''
    positionsLetters[indexCellLetter - 1] && positionsNumbers[indexCellNumber - 2] ? contador++ : ''
    //direita
    positionsLetters[indexCellLetter + 2] && positionsNumbers[indexCellNumber + 1] ? contador++ : ''
    positionsLetters[indexCellLetter + 2] && positionsNumbers[indexCellNumber - 1] ? contador++ : ''
    //esquerda
    positionsLetters[indexCellLetter - 2] && positionsNumbers[indexCellNumber + 1] ? contador++ : ''
    positionsLetters[indexCellLetter - 2] && positionsNumbers[indexCellNumber - 1] ? contador++ : ''


    return contador


}




console.log(solution(cell))
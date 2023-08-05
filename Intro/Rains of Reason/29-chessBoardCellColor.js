const cell1 = "A1"
const cell2 = "H3"


function solution(cell1, cell2) {
    const black = ['A', 'C', 'E', 'G']
    let cellColor = []
    let cellSplited
    const cells = [cell1, cell2]
    for (let i = 1; i <= 2; i++) {
        cellSplited = cells[i - 1].split('')
        if (black.includes(cellSplited[0])) {
            if (+cellSplited[1] % 2 === 0) {
                cellColor.push('white')
            }
            else { cellColor.push('black') }
        } else {
            if (+cellSplited[1] % 2 === 0) {
                cellColor.push('black')
            }
            else { cellColor.push('white') }

        }
    }

    return cellColor[0] === cellColor[1] ? true : false

}


console.log(solution(cell1, cell2))

const bishop = "g1"
const pawn = "f3"

function solution(bishop, pawn) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8',]


    //todo a distancia entre a letra e o numero tem que ser igual

    const indexBishopLetter = letters.indexOf(bishop[0])
    const indexBishopNumber = numbers.indexOf(bishop[1])
    const indexPawnLetter = letters.indexOf(pawn[0])
    const indexPawnNumber = numbers.indexOf(pawn[1])



    if (Math.abs(+indexBishopLetter - +indexPawnLetter) === Math.abs(indexBishopNumber - indexPawnNumber)) {
        return true
    } else { return false }

}


console.log(solution(bishop, pawn))


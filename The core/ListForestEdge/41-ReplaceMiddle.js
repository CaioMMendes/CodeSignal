
const arr = [9, 0, 15, 9]

function solution(arr) {



    if (arr.length % 2 === 0) {

        const soma = arr.splice(arr.length / 2 - 1, 2)

        arr.splice(arr.length / 2, 0, (soma[0] + soma[1]))
        return arr


    } else {
        return arr

    }




}



console.log(solution(arr))


const symbol = 'q'

function solution(symbol) {

    if (isNaN(+symbol)) {
        return 'not a digit'
    } else {
        return +symbol % 2 === 0 ? 'even' : 'odd'
    }



}


console.log(solution(symbol))
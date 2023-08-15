
const lastNumberOfDays = 30

function solution(lastNumberOfDays) {

    return lastNumberOfDays === 30
        ? [31]
        : lastNumberOfDays === 31
            ? [28, 30, 31]
            : [31]


}



console.log(solution(lastNumberOfDays))
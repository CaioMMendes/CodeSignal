
const young = false
const beautiful = true
const loved = true



function solution(young, beautiful, loved) {
    if (loved === true && (beautiful === false || young === false)) {
        return true
    }
    if (loved === false && beautiful === true && young === true) {
        return true
    }
    return false

}


console.log(solution(young, beautiful, loved))


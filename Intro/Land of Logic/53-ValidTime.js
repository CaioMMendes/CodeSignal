
const time = "13:58"

function solution(time) {
    const splited = time.split(':')
    const hours = splited[0]
    const minutes = splited[1]
    if (splited.length !== 2) {
        return false
    }
    return +hours >= 0 && +hours <= 23 && minutes >= 0 && minutes <= 60 ? true : false
    console.log(hours)
    console.log(minutes)
}



console.log(solution(time))
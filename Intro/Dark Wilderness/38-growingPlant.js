

const upSpeed = 7
const downSpeed = 3
const desiredHeight = 443

function solution(upSpeed, downSpeed, desiredHeight) {

    let day = 0
    let night = 0

    for (let i = 1; 2 > 1; i++) {
        day += upSpeed
        night = day - downSpeed

        if (day >= desiredHeight || night >= desiredHeight) {
            return i

        } else {
            day = night
        }



    }


}


console.log(solution(upSpeed, downSpeed, desiredHeight))
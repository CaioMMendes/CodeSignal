const yourLeft = 10
const yourRight = 14
const friendsLeft = 15
const friendsRight = 10

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

    if ((yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsLeft || yourRight === friendsRight)) {
        return true
    }

    return false

}



console.log(solution(yourLeft, yourRight, friendsLeft, friendsRight))
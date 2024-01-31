
const ver1 = "1.2.2"
const ver2 = "1.2.0"


function solution(ver1, ver2) {
    const splited1 = ver1.split('.')
    const splited2 = ver2.split('.')
    let result = false
    for (let i = 0; i < splited1.length; i++) {
        if (+splited1[i] > +splited2[i]) {
            result = true
            break
        } else if (+splited1[i] < +splited2[i]) {
            result = false
            break
        }

    }

    return result
}



console.log(solution(ver1, ver2))
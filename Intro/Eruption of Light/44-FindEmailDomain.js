
const address = "\"very.unusual.@.unusual.com\"@usual.com"

function solution(address) {

    const regex = /@([\w-]+(?:\.[\w]+)*)/
    const result = address.match(regex)
    if (result[1][0] === '.') {
        return result[1].substring(1)
    }
    return result[1]

}



console.log(solution(address))
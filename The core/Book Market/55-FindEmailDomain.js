

const address = "John.Smith@example.com"

function solution(address) {


    const splited = address.split("@")
    return splited.length > 2 ? splited[2] : splited[1]

}


console.log(solution(address))
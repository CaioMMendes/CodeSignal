
const commands = "RLR"

function solution(commands) {


    let student = 0
    let strangeStudent = 0
    let vezes = 0

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === "L") {
            student++
            strangeStudent--
        }
        if (commands[i] === "R") {
            student--
            strangeStudent++
        }
        if (commands[i] === "A") {
            student += 2
            strangeStudent += 2
        }

        if (student % 2 === 0 && strangeStudent % 2 === 0) {
            vezes++
        }

    }
    return vezes





}

console.log(solution(commands))
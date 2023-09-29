
const a = "z"
const b = "y"

function solution(a, b) {
    const splitedA = a.split("")
    const splitedB = b.split('')
    let strings = {}
    for (let i = 0; i < splitedB.length; i++) {
        const letra = splitedB[i];
        const numeroDeVezes = strings[letra] ? strings[letra] + 1 : 1;
        strings = { ...strings, [letra]: numeroDeVezes }
        console.log(strings)
    }

    let solution = 0
    for (let i = 0; i < 10000; i++) {

        const teste = splitedA.map((letter) => {
            const number = strings[letter] - 1
            console.log(number)
            strings = { ...strings, [letter]: number }
            if (number < 0 || isNaN(number)) {
                return false
            }
        })

        if (teste.includes(false) || i === 1000) {
            console.log(strings)
            break
        } else {
            solution++
        }

    }
    return solution
}


console.log(solution(a, b))
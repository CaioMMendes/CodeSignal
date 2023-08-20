
const n = 1445

function solution(n) {

    const splited = n.toString().split('')
    let string = ''
    let soma = 0
    let result = 0
    splited.map((number, index) => {
        console.log(splited[splited.length - index - 1])
        const numero = +splited[splited.length - index - 1] + soma
        soma = Math.round(numero / 10)



        if (index === splited.length - 1) {
            result = numero
        }
    })

    string = string.padEnd(n.toString().length - 1, '0')
    return +(result + string)

}

console.log(solution(n))


const param1 = 456
const param2 = 1734

param1.toString().padStart()
function solution(param1, param2) {

    const maior = Math.max(param1, param2).toString()
    let param1Splited = param1.toString().padStart(maior.length, '0').split('')
    const param2Splited = param2.toString().padStart(maior.length, '0').split('')
    for (let i = 0; i < maior.length; i++) {


    }
    const result = param2Splited.map((number, index) => {
        const soma = (+param1Splited[index] + +number) % 10



        return soma
    })



    return +result.join('')

}


console.log(solution(param1, param2))
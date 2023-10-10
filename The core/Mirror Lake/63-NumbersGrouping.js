console.log('-----------------------------------------------')

const a = [102382103, 21039898, 39823, 433, 30928398, 40283209, 23234, 342534, 98473483, 498398424, 9384984, 9839239]

function solution(a) {

    let numberOfGroups = []
    let numberOfItems = a.length
    const sortedArray = a.sort((a, b) => a - b)
    let primeiro = true
    // let newArray = sortedArray
    let valorInferior = 0
    console.log(a.length)
    console.log(sortedArray.length)
    let valorSuperior = 10000
    console.log(sortedArray)
    sortedArray.map((number, index, array) => {
        console.log(index, number)
        if (number <= 10 ** 4) {

            if (!numberOfGroups.includes(1)) {
                numberOfGroups.push(1)
                // newArray = newArray.shift()
            }
        } else {
            if (index) {
                console.log(valorInferior, valorSuperior, 'aaaaaaaaaaaa')
            }

            if (valorInferior !== arredondarParaBaixo(number) && valorSuperior !== arredondarParaCima(number)) {
                numberOfGroups.push(number)
            }
            valorInferior = arredondarParaBaixo(number)
            valorSuperior = arredondarParaCima(number)






        }




    })


    function arredondarParaBaixo(numero) {
        if (numero % 10 === 0) {
            numero = numero - 1
        }
        if (numero >= 10000) {
            return Math.floor(numero / 10000) * 10000;
        } else {
            return 10000;
        }
    }
    function arredondarParaCima(numero) {
        if (numero >= 10000) {
            return Math.ceil(numero / 10000) * 10000;
        } else {
            return 10000;
        }
    }


    console.log(numberOfGroups, numberOfItems)
    return numberOfGroups.length + numberOfItems
}


console.log('-----------------------------------------------')
console.log(solution(a))










// console.log(array.length, index)
// if (index >= array.length - 1) {
//     return
// }
// if (arredondarPara10000(number)) {
//     // if (number.length === array[index + 1].length /* && number % 10 !== 0 */) {
//     // if (String(number)[0] === String(array[index + 1])[0] || +String(number)[0] === (+String(array[index + 1])[0] - 1) && array[index + 1] % 10 === 0) {
//     // }
//     if (primeiro === true) {
//         numberOfGroups.push(index)
//         primeiro = false
//     }


// } else {
//     numberOfGroups.push(index)
//     primeiro = true
// }
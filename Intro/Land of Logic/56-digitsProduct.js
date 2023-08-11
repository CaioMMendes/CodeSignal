
// const product = 576

// function solution(product) {

//     const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
//     let error = 0
//     for (let i = 0; numbers.length > i; i++) {
//         if (product % numbers[i] === 0) {
//             error++
//         }
//     }


//     let numeroDeDigitos = 1
//     let numeroFor = product
//     let a = '9'
//     let menorNumero = '2'
//     for (let i = 0; numeroFor >= 9; i++) {
//         numeroFor = numeroFor / 9
//         numeroDeDigitos++
//         a += '9'
//         menorNumero += '2'
//     }

//     console.log(a)



//     console.log(numeroDeDigitos)
//     if (product === 0) { return 10 }
//     if (error === 0 || product===1) {
//         return -1
//     }
//     let result

//     for (+menorNumero; +a > +menorNumero; +menorNumero++) {
//         console.log(menorNumero)
//         const splited = String(menorNumero).split('')
//         result = splited.reduce((acc, current) => {
//             return acc * +current
//         })
//         if (+result == product) {
//             result = menorNumero
//             break
//         }
//     }
//     return result
// }


// console.log(solution(product))


//todo esse ta zoado

const product = 33

function solution(product) {
    console.log(isPrime(product))
    if (product === 0) {
        return 10
    }
    if (product < 10) {
        return product
    }
    if (isPrime(product) === true) {
        return -1
    }


    let result
    for (let i = 1; 5000 > i; i++) {
        const splited = String(i).split('')
        result = splited.reduce((acc, current) => {
            return acc * +current
        })

        if (+result == product) {

            result = i
            break
        }
        if (i === 4999) {
            result = -1
            break
        }
    }

    return result




    function isPrime(number) {
        if (number <= 1) {
            return false;
        }

        // Verifica divisibilidade a partir de 2 até a raiz quadrada do número
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
}


console.log(solution(product))
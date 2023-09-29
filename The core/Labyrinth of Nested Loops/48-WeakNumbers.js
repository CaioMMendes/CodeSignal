

const n = 2

function solution(n) {

    let arr = []
    let arrWeakness = []
    for (let i = 1; i <= n; i++) {

        let multiplicadores = 0
        for (let j = 1; j <= i; j++) {

            if (i % j === 0) {
                multiplicadores++
            }
        }
        arr.push(multiplicadores)
        console.log('i', i)
        console.log('multiplicadores', multiplicadores)

    }

    arrWeakness = arr.map((number, index, array) => {
        let count = 0
        for (let i = 1; i < index + 1; i++) {
            if (number < array[i]) {
                count++
            }
        }
        return count


    })

    console.log(arrWeakness)
    return [Math.max(...arrWeakness), arrWeakness.filter(number => number === Math.max(...arrWeakness)).length]





}


console.log(solution(n))
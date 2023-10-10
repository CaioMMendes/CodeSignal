
const a = [0, -1, 0, -1, 0, -1]
// const a = [-1, 1, -1, 1, -1, 1, -1, 1]
// const a = [0, 0, 0, 0, 0]
console.log('------------------------')
function solution(a) {

    const sum = a.reduce((curr, acc) => {
        return acc += curr
    })
    const oneThird = sum / 3
    const absOneThird = Math.abs(oneThird)
    let accumulated = 0
    let result = 0

    for (let i = 0; i < a.length - 2; i++) {

        accumulated += a[i]
        if (accumulated === oneThird) {

            let accumulatedTwo = 0
            for (let j = i + 1; j < a.length - 1; j++) {

                accumulatedTwo += a[j]
                if (accumulatedTwo === oneThird && (sum - accumulatedTwo - accumulated === oneThird)) {
                    result++
                }
            }
        }



    }





    return result






}













console.log(solution(a))
console.log('------------------------')
















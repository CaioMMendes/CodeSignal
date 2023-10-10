
const coins = [1, 2, 20, 60, 120]
const price = 150
console.log('-----------------')
function solution(coins, price) {

    //todo dados os preços das bananas achar o menor numero de transações possiveis
    let result = Infinity
    for (let i = 0; i < coins.length; i++) {
        let preco = price
        for (let j = 0; 0 !== preco; j++) {
            let transations = 0
            for (let k = 0; k < coins.length; k++) {
                if (preco >= coins[coins.length - 1 - k]) {
                    console.log('coins', coins[2])
                    console.log('coins2', coins.length, k)
                    preco -= coins[coins.length - 1 - k]
                    transations++
                    k = -1
                    console.log(preco)
                } else if (k === coins.length - 1) {
                    console.log(preco)

                }
            }
            if (preco === 0 && transations < result) {
                result = transations
            }

        }
    }

    console.log('asda')
    return result

}


console.log(solution(coins, price))
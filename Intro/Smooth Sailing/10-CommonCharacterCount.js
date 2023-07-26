
const s1 = "abca"
const s2 = "xyzbac"

function solution(s1, s2) {
    let repeticoes = 0

    const arrayS1 = s1.split('')
    const arrayS2 = s2.split('')

    arrayS1.map((letra) => {
        const indice = arrayS2.indexOf(letra)

        if (arrayS2.includes(letra)) {
            arrayS2.splice(indice, 1)
            return repeticoes += 1
        }
    })
    console.log('rep', repeticoes)
    return repeticoes
}


solution(s1, s2)



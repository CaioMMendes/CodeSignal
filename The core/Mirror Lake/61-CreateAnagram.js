
const s = "HDFFVR"
const t = "FEDDEE"
console.log('---------------------')
function solution(s, t) {
    const sSplited = s.split("")
    const tSplited = t.split('')
    const arrayStrings = []
    let soma = 0
    const uniqueS = [...new Set(sSplited)]
    const uniqueT = [...new Set(tSplited)]
    const arrayS = uniqueS.map((letter) => {
        const regex = new RegExp(letter, "g");
        return {
            [letter]: s.match(regex).length
        }
    })
    const arrayT = uniqueT.map((letter) => {
        const regex = new RegExp(letter, "g");
        return {
            [letter]: t.match(regex).length
        }
    })
    console.log(arrayS)
    console.log(arrayT)

    arrayS.map((letter, index) => {
        console.log(uniqueS)
        console.log(uniqueS[index])
        console.log(letter[uniqueS[index]])
        for (let i = 0; i < arrayT.length; i++) {
            if (uniqueS[index] === uniqueT[i]) {
                console.log('aaaaaaaaaa', Math.abs(letter[uniqueS[index]] - arrayT[i][uniqueT[i]]))
                soma += Math.abs(letter[uniqueS[index]] - arrayT[i][uniqueT[i]]) > letter[uniqueS[index]] - arrayT[i][uniqueT[i]] ? 0 : Math.abs(letter[uniqueS[index]] - arrayT[i][uniqueT[i]])
                return
            } else {
                if (i === arrayT.length - 1) {
                    console.log('aaaaaaaaaaa', arrayT[i][uniqueT[i]])
                    soma += letter[uniqueS[index]]
                }
            }
        }
        console.log('soma', soma)
    })
    return soma
}



console.log(solution(s, t))
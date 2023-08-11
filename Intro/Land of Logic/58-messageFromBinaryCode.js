

const code = "010010000110010101101100011011000110111100100001"


function solution(code) {
    const splited = code.split('')
    const array = []
    while (splited.length) {
        console.log('asd')
        const fatia = splited.splice(0, 8).join('')
        const letter = String.fromCharCode(parseInt(fatia, 2))
        array.push(letter)
    }

    return array.join('')

}



console.log(solution(code))


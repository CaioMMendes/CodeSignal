
const maxLength = 4
const text = "..."

function solution(maxLength, text) {
    const textoSemPontuacoes = text.replace(/[^\w\s]/g, '')
    const splited = textoSemPontuacoes.split(' ')
    const result = []
    splited.map((string) => {
        string.length <= maxLength && string.length > 0 && result.push(string)
    })
    console.log(result)
    return result.length
}



console.log(solution(maxLength, text))

// const startTag = "<button type='button' disabled>"
const startTag = "<i>"

function solution(startTag) {

    const slice = startTag.slice(1)
    const splited = slice.split(' ')
    let result = splited[0]
    if (splited.length === 1) {
        result = splited[0].slice(0, splited[0].length - 1)
    }
    return `</${result}>`
}


console.log(solution(startTag))
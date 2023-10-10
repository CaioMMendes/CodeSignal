
const picture = ["abc", "ded"]

function solution(picture) {

    const border = ''.padStart(picture[0].length + 2, '*')
    const newMatrix = picture.map((string) => {
        return `*${string}*`
    })
    return [border, ...newMatrix, border]
}



console.log(solution(picture))
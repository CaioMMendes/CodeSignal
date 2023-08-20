
const statues = [6, 2, 3, 8]

function solution(statues) {
    // const ascendent = statues.sort()
    const maior = Math.max(...statues)
    const menor = Math.min(...statues)

    return maior - menor - statues.length + 1



}



console.log(solution(statues))
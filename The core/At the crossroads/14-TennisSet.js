
const score1 = 7
const score2 = 7


function solution(score1, score2) {
    const maiorPontuacao = score1 > score2 ? score1 : score2
    const menorPontuacao = score1 > score2 ? score2 : score1
    if (maiorPontuacao !== 6 && maiorPontuacao !== 7 || maiorPontuacao === menorPontuacao) {
        return false
    }

    console.log(maiorPontuacao, menorPontuacao)
    return maiorPontuacao === 6
        ? maiorPontuacao - menorPontuacao >= 2 ? true : false
        : maiorPontuacao - menorPontuacao <= 2 ? true : false

}



console.log(solution(score1, score2))
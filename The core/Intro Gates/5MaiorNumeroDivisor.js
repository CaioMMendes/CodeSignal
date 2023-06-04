function solution(divisor, bound) {

    const divisorArredondado = Math.floor(bound / divisor)
    const solution = divisor * divisorArredondado
    return solution

}
solution(3, 15)/*retornar 9*/
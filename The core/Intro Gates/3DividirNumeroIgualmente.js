function solution(n, m) {
    //n numero de crianças
    //m numero de doces
    const numero = m / n
    const resposta = Math.floor(numero) * n
    return resposta

}
solution(4, 10)
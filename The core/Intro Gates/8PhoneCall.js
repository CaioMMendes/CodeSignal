function solution(min1, min2_10, min11, s) {
    //min1 preço pelo primeiro minuto
    //min2_10 preço pelo segundo minuto
    //min11 preço pelo restante
    //s seu dinheiro em centavos


    if (s < min1) {
        return 0
    }
    const price2_10 = (min2_10 * 9) + min1
    if (s > price2_10) {
        const moneyLeft = s - price2_10
        const minutosDepoisDo10 = Math.floor(moneyLeft / min11)
        return (10 + minutosDepoisDo10)
    }else{
        const moneyLeft = s - min1
        const minutosDepoisDo1 = Math.floor(moneyLeft / min2_10)
        return (1 + minutosDepoisDo1)
    }



}
solution(3, 1, 2, 20) //retorna 14
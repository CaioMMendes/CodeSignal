

const a = 6
const b = 4
// const a = 16
// const b = 20

function solution(a, b) {
    const hipotenusa = (((1 ** 2) + (1 ** 2)) ** 0.5)
    const maior = Math.max(a, b)
    const menor = Math.min(a, b)
    const altura = maior / hipotenusa
    const largura = menor / hipotenusa
    console.log(altura, largura)

    const primeiro = 1 + Math.floor(largura / 2) * 2
    const numeroDePontosPrimeiro = Math.floor(altura / 2) * 2 + 1

    const segundo = Math.round(largura / 2) * 2
    const numeroDePontosSegundo = Math.round(altura / 2) * 2


    console.log('primeiro', primeiro, 'numerosPrimeiro', numeroDePontosPrimeiro)
    console.log('segundo', segundo, 'numerosSegundo', numeroDePontosSegundo)
    return (primeiro * numeroDePontosPrimeiro) + (segundo * numeroDePontosSegundo)


}
console.log(solution(a, b))





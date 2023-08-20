
const current = 9
const numberOfDigits = 4

function solution(current, numberOfDigits) {

    let restante = numberOfDigits
    let result = 0
    let start = current.toString()
    let price = start.length


    for (let i = 0; 2 > 1; i++) {


        if (restante >= price) {
            console.log('restante', restante)
            console.log('result', result)
            console.log('price', price)
            restante -= price
            result = current + i
            price = (result + 1).toString().length

        } else {
            break
        }

        // console.log('restante', restante)
        // restante -= price
        // console.log('price', price)



        // price = result.toString().length
    }

    return result

}


console.log(solution(current, numberOfDigits))



// Claro! A tarefa é criar uma função que ajude a determinar a última página de um
//livro que pode ser numerada completamente com base na tinta restante para imprimir dígitos.
//Aqui está uma explicação dos requisitos:



// Página Atual: Você tem um número de página inicial(a página atual) a partir do qual
//deseja começar a numerar as páginas.




// Número de Dígitos Restantes: Você também possui informações sobre quantos dígitos podem ser
// impressos usando a tinta restante.Isso significa que você tem uma capacidade limitada para
// imprimir números nas páginas.




// Numeração de Páginas: Cada página é considerada "numerada" apenas se o número completo
// da página puder ser impresso nela.Por exemplo, se você estiver na página 102,
// mas só tiver tinta para imprimir dois dígitos, essa página não será considerada numerada.




// Limitação da Última Página: É dado que você não pode numerar a última página do livro.
//Isso significa que a última página ficará sem um número completo devido à tinta limitada.
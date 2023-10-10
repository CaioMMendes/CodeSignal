

const n = 17

function solution(n) {
    let number = n
    const subtractedNumbers = []

    while (number !== 0) {

        const splitedNumber = String(number).split('')
        let soma = splitedNumber.reduce((curr, acc) => {
            return acc = Number(acc) + Number(curr)
        })
        if (splitedNumber.length === 1) {
            soma = +splitedNumber
        }
        number -= soma
        subtractedNumbers.push(soma)




    }



    function numeroMaisFrequente(array) {
        const contagem = {};

        // Use reduce para contar a frequência de cada número
        array.forEach(numero => {
            contagem[numero] = (contagem[numero] || 0) + 1;
        });
        console.log(contagem)
        let numeroMaisFrequente;
        let contagemMaisAlta = 0;

        // Encontre o número com a contagem mais alta
        for (const numero in contagem) {
            if (contagem[numero] > contagemMaisAlta) {
                numeroMaisFrequente = numero;
                contagemMaisAlta = contagem[numero];
            }
            if (contagem[numero] === contagemMaisAlta) {
                numero > numeroMaisFrequente ? numeroMaisFrequente = numero : ''
            }
        }

        return parseInt(numeroMaisFrequente);
    }
    console.log(subtractedNumbers)
    return numeroMaisFrequente(subtractedNumbers)

}



console.log(solution(n))
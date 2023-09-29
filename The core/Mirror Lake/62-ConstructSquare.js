
const s = "a"

function solution(s) {

    const length = s.length
    let largestNumber = ''
    largestNumber = +largestNumber.padStart(length, '9')
    let largeSquare = 1
    while (largeSquare ** 2 <= largestNumber) {
        console.log(largeSquare ** 2)
        if ((largeSquare + 1) ** 2 <= largestNumber) {

            largeSquare++
        } else {
            break
        }
    }


    const stringsNumber = contarLetras(s)
    let deuCerto = true
    console.log(largestNumber, largeSquare, stringsNumber)
    while (deuCerto) {
        const number = String(largeSquare ** 2)
        const arrayDeValoresString = Object.values(stringsNumber).sort();
        const arrayDeValoresNumber = Object.values(contarLetras(number)).sort();
        console.log(arrayDeValoresNumber, arrayDeValoresString)
        console.log(contarLetras(number))
        const erros = []
        const maiorLength = arrayDeValoresNumber.length > arrayDeValoresString.length ? arrayDeValoresNumber.length : arrayDeValoresString.length
        for (let index = 0; index < maiorLength; index++) {
            const a = arrayDeValoresNumber[index]
            const b = arrayDeValoresString[index]
            console.log(a)
            console.log(b)
            if (a == b) {
                erros.push(true)
            } else { erros.push(false) }
            if (index === maiorLength - 1 && !erros.includes(false)) {
                deuCerto = false

            }
        }
        if (deuCerto === true) {
            largeSquare--
        }
        if (largeSquare === 0) {
            return -1
        }

    }






    return largeSquare ** 2





    function contarLetras(string) {
        // Crie um objeto vazio para armazenar as contagens de letras
        const contagem = {};

        // Remova espaços e converta a string para letras minúsculas
        const letras = string.replace(/\s/g, '').toLowerCase();

        // Itere sobre cada caractere na string
        for (let i = 0; i < letras.length; i++) {
            const letra = letras[i];

            // Se a letra já estiver no objeto de contagem, incremente a contagem
            if (contagem[letra]) {
                contagem[letra]++;
            } else {
                // Se a letra não estiver no objeto de contagem, inicialize com 1
                contagem[letra] = 1;
            }
        }

        // Retorne o objeto de contagem
        return contagem;
    }

}



console.log(solution(s))
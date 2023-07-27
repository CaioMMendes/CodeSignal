
const inputString = "foo(bar(baz))blim"
// inputString.replace
function solution(inputString) {
    let string = inputString
    const regex = /\((.*?)\)/
    for (let i = 0; string.match(regex) !== null; i++) {

        string = string.replaceAll('(', '#(').split('#')
        const a = string.join('')



        const newStrings = string.map((palavra, index) => {
            if (palavra.match(regex)) {
                console.log(palavra)
                const stringInvertida = palavra.replace(regex, inverterString(palavra.match(regex)[1]))
                return stringInvertida
            }
            return palavra
        })

        string = newStrings.join('')

    }


    function inverterString(str) {
        // Primeiro, separamos a string em um array de caracteres
        const caracteres = str.split('');

        // Em seguida, invertemos a ordem dos caracteres usando o método reverse()
        const caracteresInvertidos = caracteres.reverse();

        // Por fim, unimos novamente os caracteres em uma nova string usando o método join()
        const stringInvertida = caracteresInvertidos.join('');

        return stringInvertida;
    }
    return string

}
solution(inputString)
console.log(solution(inputString))

//sempre que tiver uma string dentro do parenteses inverter a ordem das letras
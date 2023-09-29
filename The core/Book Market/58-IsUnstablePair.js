
const filename1 = "fdsAs"
const filename2 = "dzdw"




function solution(filename1, filename2) {
    // Compara os nomes de arquivo `filename1` e `filename2` de maneira sensível a maiúsculas e minúsculas.

    // A expressão `filename1 < filename2` compara os nomes de arquivo lexicograficamente,
    // o que significa que ela verifica se `filename1` vem antes de `filename2` em ordem alfabética.

    // A expressão `filename1.toLowerCase() < filename2.toLowerCase()` também compara os nomes de arquivo,
    // mas antes disso, converte ambos os nomes de arquivo para letras minúsculas usando `toLowerCase()`.

    // A comparação `!==` verifica se as duas expressões acima são diferentes.
    // Se as duas comparações forem diferentes, isso significa que a comparação sensível a maiúsculas e minúsculas
    // é diferente da comparação insensível a maiúsculas e minúsculas, o que indica que os nomes de arquivo
    // são diferentes com base na sensibilidade a maiúsculas e minúsculas.

    return (
        filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
    );
}


console.log(solution(filename1, filename2))
























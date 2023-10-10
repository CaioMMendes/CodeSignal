

// const words = ["crossword", "square", "formation", "something"]
const words = ["phenomenon",
    "remuneration",
    "particularly",
    "pronunciation"]
// const words = ["eternal",
//     "texas",
//     "chainsaw",
//     "massacre"]
console.log('----------------------------------')

function solution(words) {
    let result = 0
    for (let i = 0; i < words.length; i++) {
        const primeiraPalavra = words[i]
        // console.log('primeira', primeiraPalavra)
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                const segundaPalavra = words[j]
                // console.log('segunda', segundaPalavra)
                for (let l = 0; l < primeiraPalavra.length - 2; l++) {
                    for (let m = 0; m < segundaPalavra.length - 2; m++) {
                        if (primeiraPalavra[l] === segundaPalavra[m]) {
                            const primeiraLetra = primeiraPalavra[l]
                            // console.log('primeira letra igual', primeiraPalavra[l])
                            //todo a primeira coisa a analisar na distancia vai ser o m
                            for (let k = 0; k < words.length; k++) {
                                if (k !== j && k !== i) {
                                    const terceiraPalavra = words[k]
                                    // console.log('terceira', terceiraPalavra)

                                    for (let n = m + 2; n <= segundaPalavra.length; n++) {
                                        for (let o = 0; o < terceiraPalavra.length - 2; o++) {
                                            if (segundaPalavra[n] === terceiraPalavra[o]) {
                                                const segundaLetra = segundaPalavra[n]
                                                // console.log('segunda letra igual', segundaPalavra[n], segundaPalavra, terceiraPalavra)
                                                const distancia = n - m
                                                const quartaPalavra = words.find(string => string !== primeiraPalavra && string !== segundaPalavra && string !== terceiraPalavra);
                                                // console.log('quarta', quartaPalavra)
                                                const menorPercurso = primeiraPalavra.length - (l + 1) > terceiraPalavra.length - (o + 1) ? /* primeiraPalavra.length  */terceiraPalavra.length - (o + 1) : /* terceiraPalavra.length */ primeiraPalavra.length - (l + 1)
                                                for (let p = 2; p <= menorPercurso; p++) {
                                                    const terceiraLetra = primeiraPalavra[l + p]
                                                    const quartaLetra = terceiraPalavra[o + p]

                                                    // const indexPrimeira = quartaPalavra.indexOf(terceiraLetra)
                                                    // const indexSegunda = quartaPalavra.indexOf(quartaLetra)

                                                    // if (indexSegunda - indexPrimeira === distancia && indexPrimeira !== -1 && indexSegunda !== -1) {
                                                    //     result++
                                                    //     console.log(terceiraLetra, quartaLetra)
                                                    // }


                                                    for (let q = 0; q < quartaPalavra.length; q++) {
                                                        if (quartaPalavra[q] === terceiraLetra && quartaPalavra[q + distancia] === quartaLetra && quartaPalavra[q] !== undefined && quartaPalavra[q + distancia] !== undefined) {
                                                            result++
                                                            // console.log(menorPercurso)
                                                            // console.log(quartaPalavra.length - distancia)
                                                            // console.log(q, q + distancia)
                                                            // console.log(quartaPalavra[q], quartaPalavra[q + distancia])
                                                            // console.log(primeiraLetra, segundaLetra, terceiraLetra, quartaLetra)
                                                            // console.log(primeiraPalavra, segundaPalavra, terceiraPalavra, quartaPalavra)
                                                        }

                                                    }
                                                }
                                            }
                                        }
                                    }

                                }


                            }
                        }
                    }
                }
            }
        }
        return result * 2
    }

}


console.log(solution(words), 62)
console.log(solution(["onomatopoeia",
    "philosophical",
    "provocatively",
    "thesaurus"]), 20)
console.log(solution(["africa",
    "america",
    "australia",
    "antarctica"]), 62)
console.log(solution(["anaesthetist",
    "thatch",
    "ethnics",
    "sabulous"]), 0)
console.log(solution(["eternal",
    "texas",
    "chainsaw",
    "massacre"]), 4)
console.log(solution(["crossword", "square", "formation", "something"]), 6)
console.log('----------------------------------')



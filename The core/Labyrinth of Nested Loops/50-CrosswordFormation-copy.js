

const words = ["crossword", "square", "formation", "something"]

function solution(words) {
    console.log('----------------------------------')
    let result = 0
    words.map((word, index) => {
        //todo percorre todas as palavras do array
        const splited = word.split('')
        // for (let i = 0; i < 1; i++) {
        for (let i = 0; i < words.length; i++) {
            if (i !== index) {
                //todo percorre todas as palavras tirando a atual
                //todo agora para cada letra da palavra atual, percorrer todas das outras palavras
                const palavraAtualSplited = words[i].split('')
                splited.map((letter, index) => {
                    //todo para cada letra compara com todas da outra palavra
                    for (let j = 0; j < palavraAtualSplited.length; j++) {
                        if (letter === palavraAtualSplited[j]) {
                            console.log(word, palavraAtualSplited)
                            console.log(`${letter} é igual a ${palavraAtualSplited[j]}`)

                            //todo quando as letras são iguais ai parte para a 3 palavra

                            if (j + 2 <= palavraAtualSplited.length - 1) {
                                const stringsDiferentes = []
                                for (let k = 0; k < words.length; k++) {
                                    if (words[k] !== word && words[k] !== words[i]) {
                                        stringsDiferentes.push(words[k]);
                                    }
                                }
                                console.log('strings diferentes', stringsDiferentes)
                                const index3palavraLetra = j + 2
                                let string0Splited
                                let string1Splited
                                for (let o = 0; o < 2; o++) {
                                    if (o === 0) {
                                        string0Splited = stringsDiferentes[0].split('')
                                        string1Splited = stringsDiferentes[1].split('')
                                    } else {
                                        string0Splited = stringsDiferentes[1].split('')
                                        string1Splited = stringsDiferentes[0].split('')
                                    }

                                    // const string0Splited = stringsDiferentes[0].split('')
                                    for (let m = index3palavraLetra; m < palavraAtualSplited.length; m++) {
                                        string0Splited.map((letter, indexm) => {
                                            if (palavraAtualSplited[m] === letter && (indexm + 2) <= string0Splited.length - 1 && (index + 2) <= palavraAtualSplited.length - 1) {
                                                const distancia = j
                                                // const string1Splited = stringsDiferentes[1].split('')
                                                for (let n = 0; n < string1Splited.length - distancia; n++) {
                                                    if (string1Splited[n] === string1Splited[n + distancia]) {
                                                        result++
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }


                            }


                        }
                    }

                })



                // console.log(`atual ${words[index]}`)
                // console.log(words[i])
            }
        }



        // console.log(splited)
    })

    return result



}


console.log(solution(words))
console.log('----------------------------------')
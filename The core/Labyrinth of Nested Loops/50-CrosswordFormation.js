

const words = ["crossword", "square", "formation", "something"]

function solution(words) {

    words.map((word, index) => {
        //todo percorre todas as palavras do array
        const splited = word.split('')
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



                        }
                    }

                })



                // console.log(`atual ${words[index]}`)
                // console.log(words[i])
            }
        }




        // console.log(splited)
    })




}


console.log(solution(words))
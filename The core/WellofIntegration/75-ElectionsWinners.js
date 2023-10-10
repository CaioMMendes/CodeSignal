
const votes = [2, 3, 5, 2, 5]
const k = 3

function solution(votes, k) {
    let result = []
    const highestVotes = Math.max(...votes)
    const numberOfHighVotes = encontrarTodasOcorrencias(votes, highestVotes)
    votes.map((number) => {
        (number + k) > highestVotes && result.push(number)
    })

    if (k === 0 && numberOfHighVotes.length < 2) {
        result = [' ']
    }
    return result.length

    function encontrarTodasOcorrencias(texto, substring) {
        const string = substring.toString()
        const textoString = texto.toString()
        const regex = new RegExp(string, 'g');
        return textoString.match(regex) || [];
    }

}



console.log(solution(votes, k))
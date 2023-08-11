

const votes = [5, 1, 3, 4, 1]
const k = 0


function solution(votes, k) {
    let result = 0
    const decressedVotes = votes.sort(function (a, b) {
        return b - a; // Compara os elementos em ordem decrescente
    });

    votes.map((number) => {
        if (number + k > decressedVotes[0]) {
            result += 1
        }


    })


    if (result === 0) {

        return isUniqueNumber(decressedVotes, decressedVotes[0]) ? 1 : 0


        function isUniqueNumber(array, number) {
            return array.indexOf(number) === array.lastIndexOf(number);
        }
    } else {
        return result
    }


}

console.log(solution(votes, k))
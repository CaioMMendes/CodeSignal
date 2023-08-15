
const a = [24, 85, 0]


function solution(a) {






    return parseInt(a.reduce((acc, curr) => {
        const binary = curr.toString(2).padStart(8, '0')
        console.log(binary + acc)
        return binary + acc

    }, ''), 2)



}


console.log(solution(a))


const noun = "pARiS"

function solution(noun) {
    const lower = noun.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)

}

console.log(solution(noun))
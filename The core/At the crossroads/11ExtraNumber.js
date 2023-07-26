function solution(a, b, c) {


    const array = [a, b, c]

    const filtered = array.filter((number) => {
        return number === a
    })
    if (filtered.length === 1) { return filtered[0] }
    const differentElements = array.filter(element => !filtered.includes(element));

    return differentElements[0]
}
solution(3, 2, 2)
const picture = ["abc",
    "ded"]


function solution(picture) {
    const solution = picture.map((item) => {
        return `*${item}*`
    })
    let asterisk = [...picture[0]].reduce((acumulador, letra) => acumulador + "*", "");
    asterisk += "**"
    solution.push(asterisk)
    solution.unshift(asterisk)
    console.log(solution)
}

solution(picture)
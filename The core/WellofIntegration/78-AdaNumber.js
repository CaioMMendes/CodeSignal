
const line = "10#123abc#"

function solution(line) {

    let parsed = line.toLowerCase().replace(new RegExp('_', 'g'), '').split('#');
    let isValid = parsed.length === 1 || parsed.length === 3;
    let base;
    let number;
    if (parsed.length === 1) {
        base = 10;
        number = parsed[0];
    } else {
        [base, number] = parsed;
    }
    base = Number(base);
    isValid = isValid && base >= 2 && base <= 16;
    const result = isValid && number.length && number.split('').every(digit => digit === parseInt(digit, base).toString(base));
    return result === false || result === 0 ? false : true
}







console.log(solution(line))
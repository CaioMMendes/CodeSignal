
const a = 2
const b = 3
const c = -4

function solution(a, b, c) {

    const expressions = ['+', '-', '*', '/']
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };


    let success = false
    for (const operator of expressions) {
        if (operator in operations) {
            const operationFunc = operations[operator];
            let result = operationFunc(a, b);
            if (result === c) {
                success = true
            }
        }

    }


    return success

}


console.log(solution(a, b, c))
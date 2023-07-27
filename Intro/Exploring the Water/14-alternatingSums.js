const a = [50, 60, 60, 45, 70]


function solution(a) {

    let first = 0
    let second = 0

    a.map((number, index) => {
        if (isEven(index)) { return first += number } else { return second += number }
    })


    function isEven(number) {
        return number % 2 === 0;
    }
    return [first, second]
}


solution(a)
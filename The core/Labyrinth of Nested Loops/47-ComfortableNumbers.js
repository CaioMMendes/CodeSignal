
const l = 1
const r = 9


//todo O numero a se sente confortavel com b se A for diferente de B e
//todo B lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

function solution(l, r) {

    let arr = []
    let confortable = 0

    for (let i = l; 0 <= r - i; i++) {

        const splited = i.toString().split('')
        let sNumber = splited.reduce((acc, cur) => {
            return +acc + +cur
        })
        const inferior = i - +sNumber
        const superior = i + +sNumber
        arr.push({ i, numbers: { inferior, superior } })
        //confortable numbers

    }


    arr.map((number, index) => {
        let j = 1
        for (let i = number.i + 1; i <= number.numbers.superior; i++) {

            if (i > r || i < l) {
                //todo o erro ta nessa logica aqui
            } else if (arr[index + j].numbers.inferior <= arr[index].i && arr[index + j].numbers.superior >= arr[index].i) {
                confortable++
            }

            j++



        }




    })






    return confortable

}


console.log(solution(l, r))
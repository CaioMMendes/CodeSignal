
const n = 7
const m = 23

function solution(n, m) {

    return (function () {
        let nBinary = n.toString(2)
        let mBinary = m.toString(2)
        if (nBinary.length > mBinary.length) {
            mBinary = mBinary.padStart(nBinary.length, '0')
        } else {
            nBinary = nBinary.padStart(mBinary.length, '0')
        }
        const nSplited = nBinary.split('').reverse().join('')
        const mSplited = mBinary.split('').reverse().join('')
        let vezes = 0

        while (nSplited[vezes] === mSplited[vezes]) {
            vezes++
        }
        return 2 ** vezes

    })(n, m);



}



console.log(solution(n, m))
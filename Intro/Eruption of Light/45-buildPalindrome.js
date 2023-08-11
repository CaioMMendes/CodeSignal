const st = "tregtge"


function solution(st) {
    let strings = []
    let erro = 0
    for (let i = 0; st.length > i; i++) {
        erro = 0
        for (let j = 0; Math.floor(st.length / 2) > j; j++) {
            if (st[i + j] !== st[st.length - j - 1] && erro === 0) {
                erro = 1
                strings.push(st[i])
            }
        }

        if (erro === 0) {
            break
        }

    }
    if (st === strings.join('')) {
        const reverseSt = st.split('').slice(0, -1)
        const a = reverseSt.reverse().join('')
        const joinedString = [...st, ...a].join('')
        return joinedString
    }
    if (erro === 0) {
        const a = strings.reverse().join('')
        const joinedString = [...st, ...a].join('')
        return joinedString
    }





}


console.log(solution(st))




//todo Tava dando erro em um hidden test usei essa pra passar
// var i = 0;
// var aux;
// while (st != st.split('').reverse().join('')) {
//     aux = st.split('')
//     aux.splice(st.length - i, 0, st[i])
//     st = aux.join('');
//     i++;
// }
// return st;




const names = ["dd",
    "dd(1)",
    "dd(bla)",
    "dd",
    "dd(1)",
    "dd(1)(2)",
    "dd(1)(1)",
    "dd",
    "dd(1)"]

//solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]

function solution(names) {

    const array = []
    const strings = []
    names.map((string, index) => {
        if (isNaN(+string[string.length - 2])) {
            let occurrences = strings.filter(str => str === string).length;
            if (occurrences === 0) {
                array.push(string)
            } else {
                if (array.includes(`${string}(${occurrences})`)) {
                    while (array.includes(`${string}(${occurrences})`)) {
                        occurrences++
                    }
                    array.push(`${string}(${occurrences})`)
                } else {
                    array.push(`${string}(${occurrences})`)
                }
            }
            // occurrences === 0 ? array.push(string) : array.push(`${string}(${occurrences})`)
        } else {



            let occurrences = array.filter(str => str === string).length;


            if (occurrences === 0) {
                array.push(string)
            } else {
                if (array.includes(`${string}(${occurrences})`)) {
                    while (array.includes(`${string}(${occurrences})`)) {
                        occurrences++
                    }
                    array.push(`${string}(${occurrences})`)
                } else {
                    array.push(`${string}(${occurrences})`)
                }
            }



            // occurrences === 0 ? array.push(string) : array.push(`${string}(${occurrences})`)
        }
        strings.push(string)
    })


    return array
}



console.log(solution(names))
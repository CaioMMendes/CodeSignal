console.log('------------------------------')
const string1 = "aaxyaa"
const string2 = "aazzaa"

function solution(string1, string2) {
    const splited = string1.split('')
    const array = []
    const arrayString2Used = []
    const result = splited.map((letter, index) => {
        const check = array.filter((array) => array?.[letter])
        let checkString2 = true
        console.log(check)
        if (check.length === 0) {
            array.push({ [letter]: string2[index] })
            checkString2 = !arrayString2Used.includes(string2[index])
            if (checkString2 === false) { return false }
            arrayString2Used.push(string2[index])
            return true
        }
        return check[0]?.[letter] === string2[index] ? true : false
    })
    console.log(result)
    console.log(array)
    console.log(arrayString2Used)
    return !result.includes(false)
}



console.log(solution(string1, string2))
console.log('------------------------------')















// let number = 0
// const indices = []
// const strings = []
// let finalString = string1
// const splited = string1.split('')
// const stringsToCheck = [...new Set(splited)]
// console.log(stringsToCheck)
// for (let i = 0; i < splited.length; i++) {
//     if (finalString[i] === string1[i] && indices.includes(i) === false && strings.includes(string2[i]) === false) {
//         console.log('i', i)
//         console.log(encontrarIndices(string1, string1[i]), string1[i])
//         indices.push(...encontrarIndices(string1, string1[i]))
//         console.log('string check', stringsToCheck[number])
//         strings.push(string2[i])
//         const expressaoRegular = new RegExp(stringsToCheck[number], 'g');
//         console.log('primeira', finalString.slice(0, i))
//         console.log('segunda', finalString.slice(i))

//         finalString = finalString.slice(0, i) + finalString.slice(i).replace(expressaoRegular, string2[i])
//         console.log('final', finalString)
//         number++
//     }

// }
// console.log(finalString)
// console.log(indices)
// return finalString === string2


// function encontrarIndices(string, substring) {
//     const indices = [];
//     let indice = string.indexOf(substring);

//     while (indice !== -1) {
//         indices.push(indice);
//         indice = string.indexOf(substring, indice + 1);
//     }

//     return indices;
// }
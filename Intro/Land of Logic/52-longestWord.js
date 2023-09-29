
const text = "Ready[[[, steady, go!"


function solution(text) {
    const delimitadores = " 0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const splited = text.split(new RegExp(`[${delimitadores}]`));

    const result = splited.reduce((accumulator, current) => {
        return current.length > accumulator.length ? current : accumulator
    })


    return result

}



console.log(solution(text))
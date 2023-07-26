function solution(sequence) {
    const solution = []


    if (sequence[0] < sequence[1]) {
        console.log('sequence true')
        solution.push(true)
    } else {
        console.log('sequence false')
        sequence.splice(0, 1)
        solution.push(false)
    }



    const result = sequence.map((item, index, array) => {

        if (item > array[index - 1] || (array[index - 1] === undefined)) {

            return true
        } else {
            console.log('item', item)
            console.log(array)
            if (item > array[index - 2] || array[index - 1] < array[index + 1] || index === (array.length - 1)) {
                console.log('solution push', item, array[index - 2])
                solution.push(true)
            } else {
                console.log('solution push', item, array[index - 2])
                solution.push(false)
            }
            return false
        }



    })
    console.log('solution before', solution)
    console.log('result', result)
    solution.push(...result)
    console.log('solution', solution)

    const length = solution.filter((item) => {
        return item === false
    })
    if (length.length >= 2) { return false } else { return true }
}

solution([3, 5, 67, 98, 3])
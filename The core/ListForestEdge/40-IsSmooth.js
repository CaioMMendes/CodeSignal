
const arr = [7, 4, 2, 5, 10, 7]

function solution(arr) {

    if (arr.length % 2 === 0) {

        return arr[0] === arr[arr.length - 1] && arr[Math.floor((arr.length - 1) / 2)] + arr[(Math.floor((arr.length - 1) / 2)) + 1] === arr[0] ? true : false



    } else {
        return arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)]

    }

}


console.log(solution(arr))
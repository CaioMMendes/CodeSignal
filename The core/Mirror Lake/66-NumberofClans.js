const divisors = [6, 2, 2, 8, 9, 2, 2, 2, 2]
const k = 10

function solution(divisors, k) {
  const divisorsArray = []
  for (let i = 0; i < k; i++) {
    const array = []
    for (let j = 0; j < divisors.length; j++) {
      array.push((i + 1) % divisors[j] === 0 ? 1 : 0)
    }
    console.log(array.join(''))
    divisorsArray.push(array.join(''))
  }
  console.log(divisorsArray)
  const result = [...new Set(divisorsArray)]
  return result.length
}

console.log(solution(divisors, k))


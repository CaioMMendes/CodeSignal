function solution(n) {
    const numberOfHours = Math.floor(n / 60)
    const reminder = n % 60
    let sum = 0
    const numbers = numberOfHours.toString() + reminder.toString()
    const length = numbers.length
    for (let i = 0; i < length; i++) {
        sum += parseInt(numbers[i], 10)

    }
    return sum
}
solution(808)
function fizzBuzz () {
  arrayNumbers = []
  for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) arrayNumbers.push('Fizz')
    else if ((i % 5 === 0) && (i % 3 !== 0)) arrayNumbers.push('Buzz')
    else if ((i % 3 === 0) && (i % 5 === 0)) arrayNumbers.push('FizzBuzz')
    else arrayNumbers.push(i)
  }
  return arrayNumbers
}

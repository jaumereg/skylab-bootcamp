describe('function FizzBuzz', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('should be a function', function () {
    var result = fizzBuzz
    expect(typeof result).toBe('function')
  })
  it('should return a number or string', function () {
    var result = fizzBuzz()
    expect(typeof result).toMatch(/[a-z0-9]/i)
  })
  it('should return an array with 100 elements', function () {
    expect(typeof fizzBuzz()).toBe('object')
  })
})
describe('Array test', function () {
  it('should return an array with 100 elements', function () {
    expect(arrayNumbers.length).toBe(100)
  })
  it('should receive 0 arguments', function () {
    expect(fizzBuzz.length).toBe(0)
  })
  describe('Numbers test', function () {
    it('should print 1 in first position', function () {
      expect(arrayNumbers[0]).toBe(1)
    })
    it('should print 2 in second position', function () {
      expect(arrayNumbers[1]).toBe(2)
    })
  })
  describe('Multiples TEST', function () {
    describe('Multiples of 3 test', function () {
      it('should print fizz when number is multiple of 3 (number 3)', function () {
        expect(arrayNumbers[2]).toBe('Fizz')
      })
      it('should print fizz when number is multiple of 3 (number 6)', function () {
        expect(arrayNumbers[5]).toBe('Fizz')
      })
    })
    describe('Multiples of 5 test', function () {
      it('should print buzz when number is multiple of 5 (number 5)', function () {
        expect(arrayNumbers[4]).toBe('Buzz')
      })
      it('should print buzz when number is multiple of 5 (number 10)', function () {
        expect(arrayNumbers[9]).toBe('Buzz')
      })
    })
    describe('Multiples of 3 and 5 test', function () {
      it('should print fizzbuzz when number is multiple of 3 and 5 (number 15)', function () {
        expect(arrayNumbers[14]).toBe('FizzBuzz')
      })
      it('should print fizzbuzz when number is multiple of 3 and 5 (number 30)', function () {
        expect(arrayNumbers[29]).toBe('FizzBuzz')
      })
    })
  })
})

// })
// it('shuld return a number', function () {
//  expect(typeof sum()).toBe('number')
// })
// it('should receive 2 arguments', function () {
//  expect(sum.length).toBe(2)
// })
// it('should return 5 when sum(2,3)', function ()  {
//  var result = sum(2, 3)
//  expect(result).toBe(5)
// })

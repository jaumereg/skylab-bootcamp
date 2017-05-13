describe('function sum ', function () {
  it('should exist', function () {
  	expect(sum).toBeDefined()
  })
  it('should return a number', function () {
  	var result = sum()
  	expect(typeof result).toBe("number")
  })
  it('should receive 2 arguments', function () {
   	expect(sum.length).toBe(2)
  })
  it('should return 9 when sum(2,7)', function () {
  	var result = sum(2,7)
   	expect(result).toBe(9)
  })
  it('should return 27 when sum(22,5)', function () {
  	var result = sum(22,5)
   	expect(result).toBe(27)
  })
  it('should return 27 when sum(22,"5")', function () {
  	var result = sum(22,"5")
   	expect(result).toBe(27)
  })
  it('should return -1 when sum("skylab",5)', function () {
  	var result = sum("skylab",5)
   	expect(result).toBe(-1)
  })
})

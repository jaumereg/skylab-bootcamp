describe('function drink', function () {
  it('should exist', function () {
    expect(drink).toBeDefined()
  })
  it('is a function', function () {
   expect(typeof drink).toBe("function")
  })
  it('should return a string', function () {
   var result = drink()
   expect(typeof result).toBe("string")
  })
  it('should receive an unique argument', function () {
   expect(drink.length).toBe(1)
  })
  it('should return error if the argument is not a number', function () {
    var result = drink("hola")
    expect(result).toBe("drink error, introduce a valid age")
  })
  it('should return a string when drink("27")', function () {
    var result = drink("27")
    expect(typeof result).toBe("string")
  }) 
  it('should return "drink toddy" when drink(13)', function () {
    var result = drink(13)
    expect(result).toBe("drink toddy")
  })
  it('should return "drink coke" when drink(17)', function () {
    var result = drink(17)
    expect(result).toBe("drink coke")
  })
  it('should return "drink beer" when drink(18)', function () {
    var result = drink(18)
    expect(result).toBe("drink beer")
  })
  it('should return "drink beer" when drink(30)', function () {
    var result = drink(30)
    expect(result).toBe("drink whisky")
  })
})
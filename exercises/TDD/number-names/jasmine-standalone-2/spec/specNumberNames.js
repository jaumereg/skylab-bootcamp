//test
describe('function numberNames', function() {
    it('should exist', function() {
        expect(numberNames).toBeDefined()
    })
    it('should be a function', function() {
        expect(typeof numberNames).toBe('function')
    })
    it('should return a string', function() {
        expect(typeof numberNames()).toBe('string')
    })
})
describe('Results', function() {
    it('should return ZERO if there is no argument', function() {
        var result = numberNames()
        expect(result).toBe('zero')
    })
    it('argument should be a number', function() {
        var result = numberNames('a')
        expect(result).toBe('error')
    })
    describe('Units', function() {
        it('should return five when enter 5 as argument', function() {
            var result = numberNames(5)
            expect(result).toBe('five')
        })
    })
    describe('Tens', function() {
        it('should return twenty when enter 20 as argument', function() {
            var result = numberNames(20)
            expect(result).toBe('twenty')
        })
        it('should return fiveteen when enter 15 as argument', function() {
            var result = numberNames(15)
            expect(result).toBe('fiveteen')
        })
        it('should return twentyfive when enter 25 as argument', function() {
            var result = numberNames(25)
            expect(result).toBe('twentyfive')
        })
    })
    describe('Hundreds', function() {
        it('should return one hundred when enter 100 as argument', function() {
            var result = numberNames(100)
            expect(result).toBe('one hundred')
        })
        // it('should return fiveteen when enter 15 as argument', function() {
        //     var result = numberNames(15)
        //     expect(result).toBe('fiveteen')
        // })
        // it('should return twentyfive when enter 25 as argument', function() {
        //     var result = numberNames(25)
        //     expect(result).toBe('twentyfive')
        // })
    })
})

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
        it('should return fifteen when enter 15 as argument', function() {
            var result = numberNames(15)
            expect(result).toBe('fifteen')
        })
        it('should return twenty five when enter 25 as argument', function() {
            var result = numberNames(25)
            expect(result).toBe('twenty five')
        })
    })
    describe('Hundreds', function() {
        it('should return one hundred when enter 100 as argument', function() {
            var result = numberNames(100)
            expect(result).toBe('one hundred')
        })
        it('should return two hundred and seventeen when enter 217 as argument', function() {
            var result = numberNames(217)
            expect(result).toBe('two hundred and seventeen')
        })
        it('should return seven hundred and ninety nine when enter 799 as argument', function() {
            var result = numberNames(799)
            expect(result).toBe('seven hundred and ninety nine')
        })
    })
    describe('Thousands', function() {
        it('should return two thousand when enter 2000 as argument', function() {
            var result = numberNames(2000)
            expect(result).toBe('two thousand')
        })
        it('should return two thousand, one hundred and twenty seven when enter 2127 as argument', function() {
            var result = numberNames(2127)
            expect(result).toBe('two thousand, one hundred and twenty seven')
        })
        it('should return eight thousand, one hundred and nine when enter 8109 as argument', function() {
            var result = numberNames(8109)
            expect(result).toBe('eight thousand, one hundred and nine')
        })
    })
    describe('Millions', function() {
        it('should return seven million when enter 7000000 as argument', function() {
            var result = numberNames(7000000)
            expect(result).toBe('seven million')
        })
        it('should return seven million, twelve when enter 7000012 as argument', function() {
            var result = numberNames(7000012)
            expect(result).toBe('seven million, twelve')
        })
        it('should return nine million, five hundred and forty three thousand, three hundred and twenty three when enter 9543323 as argument', function() {
            var result = numberNames(9543323)
            expect(result).toBe('nine million, five hundred and forty three thousand, three hundred and twenty three')
        })
    })
})

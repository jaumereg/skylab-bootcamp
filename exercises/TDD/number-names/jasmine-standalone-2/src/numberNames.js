// Spell out a number. For example

//       99 --> ninety nine
//      300 --> three hundred
//      310 --> three hundred and ten
//     1501 --> one thousand, five hundred and one
//    12609 --> twelve thousand, six hundred and nine
//   512607 --> five hundred and twelve thousand,
//              six hundred and seven
// 43112603 --> forty three million, one hundred and
//              twelve thousand,
//              six hundred and three

// [Source http://rosettacode.org]



function numberNames(a = 0) {

    var units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
    var tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    var aString = a.toString()
    var firstNumber = parseInt(aString[0]) - 1
    var secondNumber = parseInt(aString[1]) - 1
    var thirdNumber = parseInt(aString[1]) - 1
    if (typeof a === 'string') return 'error'
    if (a === 0) return 'zero'
    if (a >= 100 && a < 1000) {
    	if (aString[1] === '0' && aString[2] === '0') {
            return (units[firstNumber] + ' hundred')
        }
        if (aString[2] === '0') {
            return (units[firstNumber] + ' hundred and ' + tens[secondNumber])
        }
    }
    if (a > 12 && a < 100) {
        if (aString[1] === '0') {
            return (tens[firstNumber])
        } else if (a < 20) {
            return (units[secondNumber] + 'teen')
        } else {
            return (tens[firstNumber] + units[secondNumber])
        }
    }

    return units[a - 1]
}

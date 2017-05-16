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

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convertMillions(a){
    if (a >= 1000000 && a % 1000000 !== 0){
        return convertMillions(Math.floor(a / 1000000)) + " million, " + convertThousands(a % 1000000);
    }
    else if (a >= 1000000){
        return convertMillions(Math.floor(a / 1000000)) + " million"
    }
    else {
        return convertThousands(a);
    }
}

function convertThousands(a){
    if (a >= 1000 && a % 1000 !== 0){
        return convertHundreds(Math.floor(a / 1000)) + " thousand, " + convertHundreds(a % 1000);
    }
    else if (a >= 1000){
        return convertHundreds(Math.floor(a / 1000)) + " thousand"
    }
    else {
        return convertHundreds(a);
    }
}

function convertHundreds(a) {
    if (a >= 100 && a % 100 !== 0) {
        return units[Math.floor(a / 100)] + " hundred and " + convertTens(a % 100);
    } 
    else if (a >= 100) {
        return units[Math.floor(a / 100)] + " hundred"
    }
    else {
        return convertTens(a);
    }
}

function convertTens(a) {
    if (a < 10) return units[a]
    else if (a < 20) return teens[a - 10]
    else if (a % 10 !== 0){
        return tens[Math.floor(a / 10)] + " " + units[a % 10]
    } 
    else {
        return tens[Math.floor(a / 10)]
    }

}

function numberNames(a=0) {
    if (typeof a === 'string') return 'error'
    if (a === 0) return 'zero'
    else return convertMillions(a)
}
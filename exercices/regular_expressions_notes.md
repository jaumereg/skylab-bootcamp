### EXPRESIONES REGULARES
## PATRONES

```
var myRegExp = new RegExp('j.*t') // Empieza por "j", hay caracteres enmedio y termina en "t"
myRegExp.text('javascript') // true
myRegExp.text('Javascript') // false
myRegExp.text('Xavascript') // false
myRegExp.text('jts') // true
```
```
var myRegExp = /j.*t/
/j.*t/.test('javascript')
```
```
var myRegExp = /j.*t/i // i = ignoreCase
var re = new RegExp('j.*t', 'gmi') // g = global
re.test('Javascript is the best') // true
```
```
/[aeiou]/.test('a') // String
function isVowel(myChar) {
    return /[aeiou]/.test(myChar)
}
```
##METODO EXEC
```
/s(amp)le/i.exec('Sample text')
```
##MATCH
```
"HelloJavaScriptWorld".match(/a/) // ["a", index=6, ...]
"HelloJavaScriptWorld".match(/a/g) //["a", "a"]
```
##SPLIT
```
"27/11/2006".split('/') // ['27', '11', '2006']
"27/11/2006".split('/')[0] // ['27']
```
##ERRORES
```
"some text".test(/[otx]/) // "some text".test is not a function
/[otx]/.test("some text") // true
```



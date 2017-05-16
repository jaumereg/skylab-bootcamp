// translate()

// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (word) {

}

translate('sup dude?')

// isVowel() function

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// Manera 1
function isVowel( myChar ) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (var i=0; i<vowels.length; i++){
    if ( myChar === vowels[i] ) {
      return true
    }
  }
  return false
}

isVowel("a") // true
isVowel("b") // false

// Manera 2
function isVowel( myChar ) {
  if (myChar === 'a' || myChar === 'e' || myChar === 'i' || myChar === 'o' ||   myChar === 'u') {
    return true
  }
  else {
    return false
  }
}

// Manera 3
function isVowel( myChar ) {
  if ("aeiou".indexOf(myChar) !== -1) {
    return true
  }
  else {
    return false
  }
}

// Manera 4
function isVowel( myChar ) {
  return ("aeiou".indexOf(myChar) !== -1)
}


// Manera 5
function isVowel( myChar ) {
  return /[aeiou]/.test(myChar)
}


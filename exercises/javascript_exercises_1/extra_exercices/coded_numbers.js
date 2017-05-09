// encodeWord

// Define a function called encodeWord that receives a string and return
// the codified version of that string replacing the following characters:
// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

// encodeWordPlus

// Improve the previous function to add a random number between 0 and 1000 every 7 characters

var codedWord = []

function encodeWord (userInput) {
  for (var i = 0; i < userInput.length; i++) {
    if ((i % 7 === 0) && (i > 0)) {
      codedWord.push(Math.floor(Math.random() * 1000) + 1)
    }
    if (userInput[i].toLowerCase() === 't') codedWord.push(7)
    if (userInput[i].toLowerCase() === 'a') codedWord.push(4)
    if (userInput[i].toLowerCase() === 's') codedWord.push(5)
    if (userInput[i].toLowerCase() === 'o') codedWord.push(0)
    else codedWord.push(userInput[i])
  }
  console.log(codedWord.join(''))
}

encodeWord('TaSsfostATjaSnboASTOxcSAssTawqsoTertrzOSA')

// ALTERNATIVES WAYS

var codes = {
  "T": 7,
  "A": 4,
  "S": 5,
  "O": 0
}


codificate("juanma") // ju4nm4

// Way 1
function codificate(text) {
  var myText = text;
  myText = myText.replace(/t/gi, "7")
  myText = myText.replace(/a/gi, "4")
  myText = myText.replace(/s/gi, "5")
  myText = myText.replace(/o/gi, "0")
  return myText;
}

// Way 2
function codificate(text) {
  return text
          .replace(/t/gi, "7")
          .replace(/a/gi, "4")
          .replace(/s/gi, "5")
          .replace(/o/gi, "0")
}

// Way 3
function codificate(text) {
  var codes = {
    "t": 7,
    "a": 4,
    "s": 5,
    "o": 0
  }
  return text.replace(/[taso]/gi, function(itemFound) {
  return codes[itemFound] 
  })

}

// Way 4
function codificate(text) {
  return text.replace(/\w/gi, function(itemFound) {
    var codes = { "t": 7, "a": 4, "s": 5, "o": 0, "j": 1 }
    return codes[itemFound] ? codes[itemFound] : itemFound;
  })
}

// Way 5
function codificate(codes, text) {
  return text.replace(/\w/gi, function(itemFound) {
    return codes[itemFound] ? codes[itemFound] : itemFound;
  })
}

codificate( { "t": 75, "a": 43, "s": 55, "o": 30, "j": 12 }, "juanma")

var codes = { "t": 75, "a": 43, "s": 55, "o": 30, "j": 12 }
codificate( codes, "juanma")

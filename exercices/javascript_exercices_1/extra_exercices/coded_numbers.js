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

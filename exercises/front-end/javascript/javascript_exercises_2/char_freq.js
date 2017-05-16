// Way 1
function charFreq(text) {
  var frequencies = {}
  var currentChar;
  for (var i=0; i<text.length; i++){
    currentChar = text[i];
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 2
function charFreq(text) {
  var frequencies = {}
  var aText = text.split("")
  aText.forEach(function(currentChar) {
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  })
  return frequencies
}

// Way 3
function charFreq(text) {
  var frequencies = {}
  var cleanedText = text.replace(/ /g, "")
  var currentChar;
  for (var i=0; i<cleanedText.length; i++){
    currentChar = cleanedText[i];
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 4
function charFreq(text) {
  var frequencies = {}
  var cleanedText = text.replace(/[ ,.]/g, "")
  var currentChar;
  for (var i=0; i<cleanedText.length; i++){
    currentChar = cleanedText[i];
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}



// Way 5
function charFreq(text) {
  var frequencies = {}
  var cleanedText = text.replace(/\W/g, "")
  var currentChar;
  for (var i=0; i<cleanedText.length; i++){
    currentChar = cleanedText[i];
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 5
function charFreq(text) {
  var frequencies = {}
  var aText = text.match(/\w/gi) // text.match(/[a-z]/gi)
  aText.forEach(function(currentChar) {
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    }
    else {
      frequencies[currentChar]++
    }
  })
  return frequencies
}


// Way 6
function charFreq(text) {
  return text
          .match(/\w/gi)
          .reduce( function(oFreq, currentChar) {
            if (!oFreq[currentChar]) oFreq[currentChar] = 1
            else oFreq[currentChar]++
            return oFreq
          }, {})
}

// Way 7
function charFreq(text) {
  return text
          .match(/\w/gi)
          .reduce( function(oFreq, char) {
            oFreq[char] = oFreq[char] ? ++oFreq[char] : 1
            return oFreq
          }, {})
}

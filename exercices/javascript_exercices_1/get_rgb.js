// Hexadecimal

// Writes a function that convert a hexadecimal color, "blue" for example
// "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the
// name getRGB() and test it with this code

// Hexadecimal enhanced

// Improves the previous function so besides the conversion also identifies some basic colors:
// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF

var arrayColor = []
var colorName = []

function getRGB (color) {
  if (color === '#00000') colorName = 'black'
  else if (color === '#FFFFFF') colorName = 'white'
  else if (color === '#FF0000') colorName = 'red'
  else if (color === '#00FF00') colorName = 'green'
  else if (color === '#0000FF') colorName = 'blue'

  for (var i = 1; i < color.length; i += 2) {
    arrayColor.push(parseInt((color[i] + color[i + 1]), 16))
  }

  console.log('rgb(' + arrayColor.join(',') + ') ' + colorName)
}

getRGB('#0000FF')

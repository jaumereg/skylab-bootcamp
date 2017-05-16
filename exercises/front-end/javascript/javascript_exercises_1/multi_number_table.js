// Multiplications table on demand

// Write a function that writes in the console the multiplication table (in one column)
// of any number passed as parameter

function multiNumber (num) {
  for (var i = 0; i <= 10; i++) {
    console.log(num * i)
  }
}

multiNumber(7)

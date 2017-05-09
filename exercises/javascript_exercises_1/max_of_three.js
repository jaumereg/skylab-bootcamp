// maxOfThree() function

// Define a function maxOfThree() that takes three numbers as arguments and
// returns the largest of them.

function maxOfThree (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) return n1
  if (n2 > n1 && n2 > n3) return n2
  return n3
}

maxOfThree(2, 7, 1)

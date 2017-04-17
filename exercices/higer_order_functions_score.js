var scores = [5,3,4,1,7,3,5,2,7,2,9,4] // 12

var newScores = scores.map( function(score) { return score + 1 })
var havePassedAll = newScores.every( function(score) { return score >= 5 })
var isThereSome10 = newScores.some( function(score) { return score === 10 })
var failedScores = newScores.filter( function(score) { return score < 5 })

var averageScore = newScores.reduce( function(acc, item) {
  return acc + item
},0) / newScores.length

// -------------------------------------

function addOne(score) { return score + 1 }
var addOne = score => score++

// -------------------------------------

var newScores = scores.map( score => score + 1 )
var havePassedAll = newScores.every( score => score >= 5 )
var isThereSome10 = newScores.some( score => score === 10 )
var failedScores = newScores.filter( score => score < 5  )
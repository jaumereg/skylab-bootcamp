function showPassedStudentNames ( student ) {
  if (student.score >= 5) console.log(student.name)
}

function addOneToScore( student ) {
  student.score++;
  return student;
}

// show names of students that have passed
students.forEach( showPassedStudentNames )

// show names of students that have passed after adding 1 to scores
students
  .map( addOneToScore )
  .forEach( showPassedStudentNames )

students
  .map( addOneToScore )
  .filter( function(student) { return student.score >= 5 })
  .map( function(student) { return student.name })
  .join(" - ")

var students = [
  {
    name: "julian",
    score: 4
  },
  {
    name: "maria",
    score: 8
  },
  {
    name: "paco",
    score: 2
  },
  {
    name: "luisa",
    score: 9
  }
]
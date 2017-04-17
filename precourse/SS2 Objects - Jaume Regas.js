// STUDY SESSION 2
// OBJECTS

// enunciado a)
var obj = {name:"Jaume Regas", class:"XXVII", id:27};

console.log(Object.keys(obj));

// enunciado b)
function somethingThatShowsThings () {
	console.log(obj.name + ', ' + obj.class + ', ' + obj.id);
}

somethingThatShowsThings();

// enunciado c)
obj.class = "XI";

console.log(obj.class);

// enunciado d)
delete obj.id;

console.log(obj.id);

// enunciado e)
obj.city = "Boston";

// enunciado e1)
console.log(obj.city);

// enunciado f)
console.log('There are ' + Object.keys(obj).length + ' info fields');

// enunciado g)
obj.fullName = obj.name;
delete obj.name;

// enunciado g1)
console.log(obj.fullName); 

// enunciado h)
console.log('Hello, I\'m ' + obj.fullName + ' and I\'m from ' + obj.city);

// enunciado h1)
obj.job = 'Director';
obj.location = 'NYC';

// enunciado h2)
console.log(obj.job + ', ' + obj.location);

// enunciado i)
function avenger (fullName, classy, city, job, location) {
	this.fullName = fullName;
	this.class = classy;
	this.city = city;
	this.job = job;
	this.location = location;
}

var me = new avenger ("Jaymolo", "First class", "Barcelona", "Director", "Aula Mar");
console.log(me);

// enunciado j)
var you = new avenger ("Bertix", "First class", "Barcelona", "Director", "Gimbebe");
console.log(you);

// enunciado k)
you.total = you.fullName + ', ' + you.class + ', lives in ' + you.city + ' and works in ' + you.location;
console.log(you.total);

// enunciado l)
function showNames () {
	console.log(me.fullName + ', ' + you.fullName);
}

showNames();

// enunciado m)
var student = {name:"Peter", age:21, location: "Somewhere"};

console.log(student.name + ', ' + student.age + ', ' + student.location);
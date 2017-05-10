var sum = 0
var array = process.argv

array.splice(0, 2)
array.forEach(function(number, key) {
    	return sum += +number
});

console.log(sum)


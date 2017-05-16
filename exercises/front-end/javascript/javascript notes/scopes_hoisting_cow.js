var cow = "purple";
var f = function(x) {
	var r = 0;
	cow = "blue";
	if (x > 3) {
		var cow = "green";
		r = 7;
	}
	return [r, cow];
};

f(2); // [0, blue]
f(6); // [7, green]
console.log(cow); // purple
var mathy = function(x) {
    return function (y) {
        return function (z) {
            return (x / y) - z;
        }
    }
}

mathy(4)(3)(2) //(4/3) - 2
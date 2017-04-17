//CLOSURE

function timesCallFn() {
  var times = 1;
  return function() {
    return times++;
  }
};

var m = timesCallFn();

m(); //2
m(); //3
m(); //4...

//NOTA: Se actualiza el valor del padre.
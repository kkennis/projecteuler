function collatzLength(n, accum){
  if (typeof(accum) === "undefined"){
    accum = 0;
  }

  var x = 0;

  if (n === 1){
    x = accum;
  } else if (n % 2 === 0) {
    x = collatzLength(3 * n + 1, accum + 1);
  } else {
    x = collatzLength((n/2), accum + 1);
  }

  return x;
}

var largest = 0;
var num = 1;

for(var i = 1; i <= 1000000; i++){
  if (i % 100 == 0){
    console.log("Doing iteration " + i);
  }

  var newLength = collatzLength(i);
  if (newLength > largest){
    largest = newLength;
    num = i;
  }
}

console.log(largest);
console.log(num);
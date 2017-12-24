// Defining a function

var sqaure = functoin(x){
  return x * x;
};

console.log(sqaure(12));


var makeNoise = function(){
  console.log("Pling!");
};

makeNoise();
// -> Pling!

var power = function(base, exponent){
  var result = 1;
  for(var count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

console.log(power(2,10));
// -> 1024


// paramaters and scoping

var x = 'outside';

var f1 = function(){
  var x = "inside f1";
};
f1();
console.log(x);
// -> outside

var f2 = function(){
  x = "inside f2";
};
f2();
console.log(x);
//-> inside f2

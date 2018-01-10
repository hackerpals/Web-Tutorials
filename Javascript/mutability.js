// JAVASCRIPT MUTABILITY

var object1 = {value:10 }; 
var object2 = {object1}; 
var object3 = {value:10};

console.log(object1 == object2); 
//OUTPUT -> true
console.log(objcet1 == object3 );
//OUTPUT -> fales

object1.value = 15;
console.log(object2.value);
// OUTPUT -> 15 
console.log(object3.value);
//OUTPUT -> 10


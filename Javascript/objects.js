//JAVASCRIPT OBJECTS 

var day1 = {
    squirrel: false, 
    events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
// OUTPUT -> false
console.log(day1.wolf);
// OUTPUT -> undefined
day1.wolf = false;
console.log(day1.wolf);



var anObject = {left:1, right:2};
console.log(anObject.left); 
// OUTPUT -> 1
delete anObject.left; 
console.log(anObject.left);
//OUTPUT -> undefined
console.log("left" in anObeject);
//OUTPUT -> false
console.log("right" in anObject); 
//OUTPUT -> true


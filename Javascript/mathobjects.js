// JAVASCRIPTY MATH OBJECTS

function randomPointCircle(radius){
    var angle = Math.random() *2 * Math.PI;
    return {x: radius * Math.cos(angle), 
    y: radius * Math.sin(angle)};

}
console.log(randomPointOnCircle(2)); 


// JAVASCRIPT RANDOM 

console.log(Math.random()); 
console.log(Math.random());
console.log(Math.random()); 

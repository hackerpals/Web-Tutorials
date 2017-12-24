function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    //arc(x,y, radius, startAngle, endAngle,anticlockwise)
    //arcTo(x1,y2,x2,y2,radius) 

    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,  true); // Outer circle
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0, Math.PI, false); // Mouth
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2, true); // Left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0, Math.PI*2, true); // Right eye
    ctx.stroke();


    // Make a set of squares
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(35,105);
    ctx.fill();


    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

  }
}

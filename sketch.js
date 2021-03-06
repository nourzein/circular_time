function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(300, 300);
  rotate(-90);

  var now = clock();

  var secondsArc = map(now.sec, 0, 60, 0, 360);
  var minutesArc = map(now.min, 0, 60, 0, 360);
  var hoursArc = map(now.hour % 12, 0, 12, 0, 360);

  background(0);
  fill(66, 21, 55, 95);
  noStroke();
  ellipse(0, 0, 400, 400);

  noFill();
  strokeWeight(8);
  strokeCap(SQUARE);
  stroke(225, 52, 235);
  arc(0, 0, 300, 300, 0, secondsArc); //seconds line
  arc(0, 0, 335, 335, 0, minutesArc); //minutes line
  arc(0, 0, 375, 375, 0, hoursArc); //hours line
}

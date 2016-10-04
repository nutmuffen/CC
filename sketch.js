var x = 0;
var y = 0;
var r = 50;

var d1 = 0.0;
var d2 = 120.0;
var d3 = 240.0;

var speed = 0;

var fc1 = 0;
var fc2 = 0;
var fc3 = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(60);
  
}

function draw() {
  noStroke();
  noFill();
  x = mouseX;
  y = mouseY;
  ellipse(x, y, 100,100);
  
  if(key == 'c'){
    fill(fc1, fc2, fc3);
  }
  ellipse(x + r * cos(radians(d1)), y + r * sin(radians(d1)), 20, 20);
  ellipse(x + r * cos(radians(d2)), y + r * sin(radians(d2)), 20, 20);
  ellipse(x + r * cos(radians(d3)), y + r * sin(radians(d3)), 20, 20);
  
  
  if(key == 'v'){
    fc1 = random(255);
    fc2 = random(255);
    fc3 = random(255);
  }
  
  time2 = millis();
  
  if (mouseIsPressed){
        if (speed < 0)
        {
          speed = -20;
        }
        else{
          speed = 20;
        }
    }
    
  else{
    speed = 5.0;
  }
  
  
  
  d1 += speed;
  d2 += speed;
  d3 += speed;
  
}
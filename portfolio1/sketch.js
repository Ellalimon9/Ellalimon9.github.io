let x;
let loh;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  loh = random(900);
  
  stroke(0,20);

  
  //background(220)
  circle (0,0,loh);
  circle (1000,0,loh);
  circle (0,800,loh);
  circle (600,400,loh);
  circle (0,1000,loh);
  circle (1000,600,loh);
  circle (2000,2000,loh);

  
  circle (300,200,loh);
  noFill();
  //fill (45, 300, 160, 70);
  
  line(0,0, 300, loh);
  line(0,loh, 900, 300);
  line(loh, 0, 1300, 300);
  line(loh, 1500, 1300, 300);
  line(loh, 0, 600, 300);
  line(0,windowWidth, windowHeight, loh);
  line(loh, windowHeight, 600, 300);
  line(1500,1500, 300, loh);

  
}
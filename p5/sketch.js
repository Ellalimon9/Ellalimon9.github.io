let circleX = 100;
let circleY = 100;
let diameter = 50;

function setup() {

createCanvas (windowWidth, windowHeight);
background (0);
}

function draw() {

    background(0);


fill("white");
noStroke();
    circle(mouseX, mouseY, 100);

    stroke("black");
    noFill();
    circle(circleX, circleY, 50);


    if (mouseX > circleX - 25 && mouseX < circleX + 25) {
        if (mouseX > circleX - 25 && mouseX < circleX + 25) {
            
       circleX = random(0, width);
       circleY = random(0, height);
       diameter = diameter - 10;
        }
    }
}



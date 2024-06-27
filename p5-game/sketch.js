let circleX, circleY;
let circleSize = 100;
let score = 0;
let gameState = 'play';
let circleColor;
let bgColor;
let img; // Variable to hold the image

function preload() {
    img = loadImage('./roach.png'); // Load the image
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    circleX = random(circleSize, width - circleSize);
    circleY = random(circleSize, height - circleSize);
    circleColor = color(random(255), random(255), random(255)); // Initial random color
    bgColor = color(random(255), random(255), random(255)); // Initial random background color
}

function draw() {
    // Set background color
    background(bgColor);

    // Display score
    textSize(36);
    textAlign(RIGHT, TOP);
    fill(0); // Set text color to black
    text('Score: ' + score, width - 30, 30);

    // Draw image
    imageMode(CENTER);
    image(img, circleX, circleY, circleSize, circleSize);

    if (gameState === 'play') {
        // Move image
        circleX += random(-5, 5);
        circleY += random(-5, 5);

        // Ensure image stays within canvas bounds
        circleX = constrain(circleX, circleSize / 2, width - circleSize / 2);
        circleY = constrain(circleY, circleSize / 2, height - circleSize / 2);
    }
}

function mousePressed() {
    // Check if mouse click is inside the image
    let d = dist(mouseX, mouseY, circleX, circleY);
    if (d < circleSize / 2) {
        score++;
        circleX = random(circleSize, width - circleSize);
        circleY = random(circleSize, height - circleSize);
        circleColor = color(random(255), random(255), random(255)); // Change to a new random circle color
        bgColor = color(random(255), random(255), random(255)); // Change to a new random background color
    }
}

function keyPressed() {
    // Restart the game on key press (spacebar)
    if (key === ' ') {
        score = 0;
        circleX = random(circleSize, width - circleSize);
        circleY = random(circleSize, height - circleSize);
        circleColor = color(random(255), random(255), random(255)); // Change to a new random circle color
        bgColor = color(random(255), random(255), random(255)); // Change to a new random background color
    }
}

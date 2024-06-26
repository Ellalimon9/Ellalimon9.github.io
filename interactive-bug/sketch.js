
let circleX, circleY;
let circleSize = 50;
let score = 0;
let gameState = 'play';

// Define background colors based on score
let backgroundColors = ['#f0f0f0', '#e6f7ff', '#ffe6cc'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    circleX = random(circleSize, width - circleSize);
    circleY = random(circleSize, height - circleSize);
}

function draw() {
    // Change background color based on score
    if (score < 5) {
        background(backgroundColors[0]); // Light gray
    } else if (score < 10) {
        background(backgroundColors[1]); // Light blue
    } else {
        background(backgroundColors[2]); // Light orange
    }

    // Display score
    textSize(36);
    textAlign(RIGHT, TOP);
    fill(0); // Set text color to black
    text('Score: ' + score, width - 30, 30);

    // Draw circle
    fill(255, 0, 0); // Red circle
    ellipse(circleX, circleY, circleSize);

    if (gameState === 'play') {
        // Move circle
        circleX += random(-5, 5);
        circleY += random(-5, 5);

        // Ensure circle stays within canvas bounds
        circleX = constrain(circleX, circleSize / 2, width - circleSize / 2);
        circleY = constrain(circleY, circleSize / 2, height - circleSize / 2);
    }
}

function mousePressed() {
    // Check if mouse click is inside the circle
    let d = dist(mouseX, mouseY, circleX, circleY);
    if (d < circleSize / 2) {
        score++;
        circleX = random(circleSize, width - circleSize);
        circleY = random(circleSize, height - circleSize);
    }
}

function keyPressed() {
    // Restart the game on key press (spacebar)
    if (key === ' ') {
        score = 0;
        circleX = random(circleSize, width - circleSize);
        circleY = random(circleSize, height - circleSize);
    }
}

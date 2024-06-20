let grid;
const gridSize = 6;
let squareSize;
const colors = ['#190019', '#2B124C', '#522B5B', '#854F6C', '#DFB6B2', '#FBE4D8'];
let xOffset, yOffset;

function setup() {
  createCanvas(400, 400);
  squareSize = width / gridSize;
  xOffset = (width - gridSize * squareSize) / 2;
  yOffset = (height - gridSize * squareSize) / 2;
  initializeGrid();
  frameRate(2);
}

function draw() {
  background(220);
  drawGrid();

  if (!isGridFull()) {
    let x = int(random(gridSize));
    let y = int(random(gridSize));
    let colorIndex = int(random(colors.length));
    let color = colors[colorIndex];

    grid[x][y] = color; // Directly assign the color, whether it's null or different.
  } else {
    noLoop();
  }
}

function mousePressed() {
  initializeGrid();
  loop();
}

function initializeGrid() {
  grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid[i] = Array(gridSize).fill(null);
  }
}

function drawGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] !== null) {
        fill(grid[i][j]);
      } else {
        fill(255);
      }
      stroke(0);
      rect(xOffset + i * squareSize, yOffset + j * squareSize, squareSize, squareSize);
    }
  }
}

function isGridFull() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}

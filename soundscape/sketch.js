
    let userClicked = false;
    
    let labSound;

function preload() {

  labSound = loadSound ("assets/lab.mp3");
}

    function setup() {
      createCanvas(windowWidth, windowHeight);
    textSize(50);
    textAlign(CENTER);
    textStyle(BOLD);
    }

    function draw() {
      background("hotpink");

if (userHasClicked = false) {
  text("Click to start...",width / 2, height / 2);
} else {
  if(labSound.isPlaying() = false){
    labSound.play();
      }

let volume = map(
  mouseX, 
  0,
  width,
  0,
  1
)

labSound.setVolume(volume);

     }
    }

    function mouseClicked() {
      userHasClicked = true;
    }

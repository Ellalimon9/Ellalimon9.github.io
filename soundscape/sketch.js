
    let riverSound;
    let metalSound;
    let userHasClicked = false;

    function preload() {
    riverSound = loadSound('assets/river.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  riverSound.setVolume(1)
 
}

function draw() {
  background("hotpink");

  if(userHasClicked == false){
    text ('Click to start', width/2, height/2)
  }
   else{

if(riverSound.isPlaying() == false){
    riverSound.play();
    }

if(riverSound.isPlaying() == false){
    riverSound.play();
    }

    let targetVolume = map(
    mouseX,
    0,
    width,
    0, 
    1
    )
    riverSound.setVolume(targetVolume)

   }

}

function mouseClicked(){
    userHasClicked = true;

}
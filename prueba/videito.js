var status;
var volume = 0.5;
var speed = 1;
var videoFile;
let fil;
let s=false;
var t;

function preload() {
  videoFile = createVideo('elephantsdream.webm', videoLoad);
  videoFile.hide();
  
}

function videoLoad() {
    status = 1;
    videoFile.play();
    
  }
  
  function setup() {
    createCanvas(710, 400);
   }

   function draw() {

   
    image(videoFile, 0, 0, 710, 400);
   t = videoFile.time();
   print(t);
    
}

function mousePressed() {
    
    videoFile.play();
    videoFile.time(10.00);
}
function keyTyped() 
{

    if (key == 'f') {

        videoFile.pause();
        
    }  
  }
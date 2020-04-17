// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?
var zona;
var objecto;
var duracion
var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset
var img;
var video;


function preload() {

    video = document.getElementById('v')
    video.play();
    manzana = document.getElementById('man'); 
    img = manzana;
    
    
  }
  
  function videoLoad() {
      status = 1;
      
      
    }

function setup() {
  createCanvas(1920, 1080);
  
  // Starting location
  x = 100;
  y = 100;
  // Dimensions
  w =100;
  h = 100;
}



function draw() {
  background(255);
 zona = rect(40, 120, 120, 120);

duracion= video.time();
image(img, x, y,w,h);
 if(duracion > 5.00 && duracion < 5.20)
 {
     image(img, x, y,w,h);
           
}

  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }


 if(x>=40 && x<=160 && y>=120 && y<=240)
 {
    videoFile.play();
    print("Funciona");
    
    
    
 }
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}
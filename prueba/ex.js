var boxes = [];
var monedas = [];
var img;
var img2;
var t1;
var t2=10.00;
var boton;
var botonMenu;
var con =0;
var estado =0;
var tempmod=[];
var tempman=[];
var escena=0;
var volume = 0.5;
var tiempo=0;
var f = 3.00;
var puntaje=0;
var usuario;



function preload() { 

    img = loadImage('ap.png'); 
    img2 = loadImage('coin.png');     
    car = loadImage('car.png'); 
    
  }
 
function setup() {
    // createCanvas(displayWidth,displayHeight);
    createCanvas(1280, 720);
    
    usuario = select ("#log")
    videoFile = createVideo('prueba.mp4', videoLoad);
    videoFile.hide();
    boton =  createButton('Continuar');
    boton.hide();
    botonMenu =  createButton('Menú');
    botonMenu.hide();
   
    boton.mousePressed(continuar);
    
    videoFile.showControls();
    
    for (var i = 0; i < 1; i++) {
        let esp = 600+165*i;
        tempman[i]= esp;
        boxes.push(new Box(esp));
    }

    for (var i = 0; i < 1; i++) {
        let esp = 600+165*i;
        tempmod[i]= esp;
        monedas.push(new moneda(esp));
    }
}
function videoLoad() {
    status = 1;
    videoFile.play();
    
  }
 
function draw() {
    botonMenu.position(0, 0);
    botonMenu.size(200,100);
    botonMenu.show();

    if(puntaje==0){
        tiempo++;
        print(tiempo);
    }
   
    
    
    
    image(videoFile,0,0,1280, 720); 
    t= videoFile.time();    
   

print(usuario);

if(t>= 35.60)
{

}

    if(t>=9.16 && t<=9.40 && escena == 0)
        {
            estado=0;
            for (var i = 0; i < monedas.length; i++) {
                videoFile.pause();
                monedas[i].show();
                //image(car,900,400,300,300);
                stroke(0);
                strokeWeight(10);
                textSize(100);
                text(con.toString(), 1100, 640);
                boton.show();
                boton.position(1000, 40);
                boton.size(200,100);
                
                if(monedas[i].xpos>=950 && monedas[i].xpos<=1280 && monedas[i].ypos>=400 && monedas[i].ypos<=720)
                {                    
                    monedas.splice(i,1); 
                    monedas.push(new moneda(tempmod[i]));   
                    con++;       
                    
                }
                
            }
        }
        
        if(t>=16.20 && t<=16.40 && escena == 1)
        
        {
            estado=1;
            for (var i = 0; i < boxes.length; i++) {
                videoFile.pause();
                boxes[i].show();
                //image(car,900,400,300,300);
                stroke(0);
                strokeWeight(10);
                textSize(100);
                text("6 +   =12", 500, 300);
                textSize(50);
                text(con.toString(), 1100, 600);
                textSize(100);
                fill(0, 102, 153);
                text(con.toString(), 650, 300);
                boton.show();
                boton.position(1000, 40);
                boton.size(200,100);
                
                if(boxes[i].xpos>=950 && boxes[i].xpos<=1280 && boxes[i].ypos>=400 && boxes[i].ypos<=720)
                {                    
                    boxes.splice(i,1); 
                    boxes[i] = new Box(tempman[i]);   
                    con++;       
                    
                }
                
            }
        }

        if(t>=25.00 && escena == 2)
        
        {
            estado=2;
            for (var i = 0; i < monedas.length; i++) {
                videoFile.pause();
                monedas[i].show();
                //image(car,900,400,300,300);
                stroke(0);
                strokeWeight(10);
                textSize(100);
                text("12 -   =6", 500, 300);
                textSize(50);
                text(con.toString(), 1100, 400);
                textSize(100);
                fill(0, 102, 153);
                text(con.toString(), 630, 300);
                boton.show();
                boton.position(1000, 40);
                boton.size(200,100);
                
                if(monedas[i].xpos>=950 && monedas[i].xpos<=1280 && monedas[i].ypos>=400 && monedas[i].ypos<=720)
                {                    
                    monedas.splice(i,1); 
                    monedas.push(new moneda(tempmod[i]));   
                    con++;       
                    
                }
                
            }
        }

        if(t>= 35.40 && t<= 38.60 && escena==3)
        {
            videoFile.pause();
            stroke(0);
            strokeWeight(10);
            textSize(100);
            text(tiempo.toString(), 640, 390);

            stroke(0);
            strokeWeight(10);
            textSize(100);
            text("Tu Tiempo", 590, 300);
            
        }
    
    
}
 
 function continuar()
 {
     
    if(estado ==0)
    {
        boton.hide();
        if(con === 6){
      
            videoFile.play();
            escena =1;     
        }
        else
        {  // videoFile.play();
            //videoFile.time(32.09);
           perder();
           
            
        }
        
        con =0;
    }

    if(estado==1)
    {
      
        if(con === 6){
      
            
            videoFile.play();
            escena =2;
                  
        }
        else
        {  
             perder();           
        }
        
       con =0;
        
    }

    if(estado==2)
    {
      
        if(con === 6){
      
            
            videoFile.play();
            escena =3;
                  
        }
        else
        {   
            perder();  
        }
        
       con =0;
       puntaje=1;
        
    }
   
      
 }

 function perder() {
  
        videoFile.play();
        videoFile.time(45.60);
        estado = estado;
   
   

 }
 
function mousePressed() {

   
    for (var i = 0; i < boxes.length; i++) {
       
        if (boxes[i].boxover == true) {
            boxes[i].locked = true;
         
           
        } else {
 
            boxes[i].locked = false;
            
        }
        boxes[i].xoffset = mouseX - boxes[i].xpos;
        boxes[i].yoffset = mouseY - boxes[i].ypos
       
    }

    for (var i = 0; i < monedas.length; i++) {
       
        if (monedas[i].boxover == true) {
            monedas[i].locked = true;
         
           
        } else {
 
            monedas[i].locked = false;
            
        }
        monedas[i].xoffset = mouseX - monedas[i].xpos;
        monedas[i].yoffset = mouseY - monedas[i].ypos
       
    }
    return false
}
 
function mouseDragged() {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].locked) {
            boxes[i].xpos = mouseX - boxes[i].xoffset;
            boxes[i].ypos = mouseY - boxes[i].yoffset;
        }
    }

    for (var i = 0; i < monedas.length; i++) {
        if (monedas[i].locked) {
            monedas[i].xpos = mouseX - monedas[i].xoffset;
            monedas[i].ypos = mouseY - monedas[i].yoffset;
        }
    }
}
 
function mouseReleased() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].locked = false;
    }

    for (var i = 0; i < monedas.length; i++) {
        monedas[i].locked = false;
    }
}

function keyTyped() {  
    if (key == ' ') {   
      if(status == 1) {
        videoFile.pause(); 
        status = 0;
      } else {
        videoFile.play();         
        status = 1;
      }
    } else if (key == '>' && status == 1 && speed < 1.9) {
      speed += 0.1;
      videoFile.speed(speed);
    } else if (key == '<' && status == 1 && speed > 0.1) {
      speed -= 0.1;
      videoFile.speed(speed);
    } else if (key == '+' && status == 1 && volume < 0.9 ) {
      volume += 0.1;
      videoFile.volume(volume);    
    } else if (key == '-' && status == 1 && volume > 0.1) {
      volume -= 0.1;
      videoFile.volume(volume);
    } 
    if (key == 'd' && status == 1 ) {
        videoFile.time(t+f) ;
        
      } 

    if (key == 'a' && status == 1 ) {
        videoFile.time(t-f) ;
        
      } 
    
   
  }
 

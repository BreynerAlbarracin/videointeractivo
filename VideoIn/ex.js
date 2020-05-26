var boxes = [];
var monedas = [];
var img;
var img2;
var t=0;
var boton;
var botonMenu;
var botonSalir;
var botonReiniciar;
var botonConVid;
var con =0;
var estado =0;
var tempmod=[];
var tempman=[];
var escena=0;
var volume = 0.5;
var tiempo=0;
var f = 3.00;
var puntaje=0;
var inicio = true;
var rec;
var nombre;
var esc=0;
var verb=0;

var comen= false;
var emp=0;




function preload() { 

    img = loadImage('ap.png'); 
    img2 = loadImage('coin.png');     
    car = loadImage('car.png'); 
    
  }
 
function setup() {
   
    if(verb ==0)
    {
        crearbotones();
    }
    
    if(emp==1)
    {
        crear();
       print("Setup");
    }

  
      
       
    
    
 
}
function videoLoad() {
    status = 1;
    videoFile.play();
    
  }

  function crear()
{
    
    createCanvas(1280, 720);

    videoFile = createVideo('prueba.mp4', videoLoad);
    videoFile.hide();
    boton =  createButton('Continuar');
    boton.hide();
    botonMenu =  createButton('Menú');
    botonMenu.hide();   
    boton.mousePressed(continuar);
    botonMenu.mousePressed(menu);

    botonReiniciar =  createButton('Reiniciar');     
    botonReiniciar.mousePressed(reiniciar);
    botonReiniciar.hide(); 
   
    botonSalir =  createButton('Salir');     
    botonSalir.mousePressed(salir);
    botonSalir.hide(); 
    
    botonConVid =  createButton('Continuar');     
    botonConVid.mousePressed(continuarv);
    botonConVid.hide(); 
    
    
    videoFile.showControls();
    
    for (var i = 0; i < 1; i++) {
        let esp = 600+165*i;
        tempman[i]= esp;
        boxes.push(new Box(esp));
    }

    for (var i = 0; i < 5; i++) {
        let esp = 600+165*i;
        tempmod[i]= esp;
        monedas.push(new moneda(esp));
    }

    comen = true;
    
}

 
function draw() {

     if(comen== true){
    botonMenu.position(0, 0);
    botonMenu.size(200,100);
    botonMenu.show();
    print(nombre);

    if(puntaje==0){

        tiempo++;
        print(estado);
    }    

    image(videoFile,0,0,1280, 720); 
    t= videoFile.time();    
   
if(t>= 48.00)
{
    if( estado==0)
    {
        videoFile.time(9.00);
    }

    if( estado==1)
    {
        videoFile.time(16.20);
    }

    if( estado==1)
    {
        videoFile.time(16.20);
    }

    if( estado==2)
    {
        videoFile.time(25.00);
    }
    
    
    
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

        if(t>=25.00 && t<=25.20 && escena == 2)
        
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
                text(con.toString(), 690, 300);
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
            textAlign(CENTER);
            stroke(0);
            strokeWeight(10);
            textSize(100);
            text(tiempo.toString(), 840, 490);
            text(nombre.toString(), 840, 590);
            fill(255);
            stroke(0);
            strokeWeight(10);
            textSize(100);
            text("Tu Tiempo", 840, 400);
            
        }
    
    
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
        { 
           perder();           
            
        }
        
        con =0;
    }

    if(estado==1)
    {
        boton.hide();
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
        boton.hide();
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

 function menu() {  
   

    botonReiniciar.position(500, 200);
    botonReiniciar.size(100,70);
    botonReiniciar.show();

    botonSalir.position(500, 300);
    botonSalir.size(100,70);
    botonSalir.show();

    botonConVid.position(500, 400);
    botonConVid.size(100,70);
    botonConVid.show();
    
    videoFile.pause();

}
function reiniciar() 
{ 
    
  reset();
}

function reset()
{

    con=0;
    estado=0;
    escena=0;
   videoFile.stop();
    botonReiniciar.hide();
    botonSalir.hide();
    botonConVid.hide();
    createCanvas(1280, 720);    
    

    videoFile = createVideo('prueba.mp4', videoLoad);
    videoFile.hide();
    boton =  createButton('Continuar');
    boton.hide();
    botonMenu =  createButton('Menú');
    botonMenu.hide();   
    boton.mousePressed(continuar);
    botonMenu.mousePressed(menu);

    botonReiniciar =  createButton('Reiniciar');     
    botonReiniciar.mousePressed(reiniciar);
    botonReiniciar.hide(); 
   
    botonSalir =  createButton('Salir');     
    botonSalir.mousePressed(salir);
    botonSalir.hide(); 
    
    botonConVid =  createButton('Continuar');     
    botonConVid.mousePressed(continuarv);
    botonConVid.hide(); 
    
   
}

 

 function salir() 
{ 
  remove();
 }

 function continuarv() 
{ 
    botonReiniciar.hide();
    botonSalir.hide();
    botonConVid.hide();

    videoFile.play();

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



  function start()
  {
    
    emp=1;
    verb=1;
    print("Funciona",emp);    
    setup();

    esconder();
    
  } 

  function esconder()
  {
    input.hide();
    button.hide();
  }

  function crearbotones()
  {
    input = createInput();
    input.position(20, 65);
    input.size(600,30);
    
    input.value("JUAN");
    nombre = input.value();
   
    
    button = createButton('Empezar');
    button.position(625, 65);
    button.mousePressed(start);
    button.size(200,35);
    
  }

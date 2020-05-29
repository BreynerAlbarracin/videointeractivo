var boxes = [];
var monedas = [];
var monedas2 = [];
var img;
var img2;
var t;
var boton;
var botoneEnviar;
var botonSalir;
var botonReiniciar;
var botonConVid;
var numMoneda = 0;
var numManzana = 0;
var numMonedaP = 0;
var estado = 0;
var tempmod = [];
var tempmod2 = [];
var tempman = [];
var escena = 0;
var volume = 0.5;
var tiempo = 0;
var f = 3.00;
var puntaje = 0;
var rec;
var nombre;
var desTiempo = 0;
var video;
var emp = 1;
var mostraritem = false;
var intentos = 0;
var minutos = 0;
var segundos = 0;
var contador = 0;
var name = ""
var pass = ""
//var login = "http://animalgeek.sytes.net/V&TV/student"
var login = "http://localhost:3000/V&TV/student"
var server = "http://localhost:5001"

function preload() {
    img = loadImage('ap.png');
    img2 = loadImage('coin.png');
}

function setup() {
    var urlparams = new URLSearchParams(window.location.search)
    name = urlparams.get("name")
    pass = urlparams.get("pass")

    if(!name || !pass){
        window.location = login 
    }

    crear();
}

function videoLoad() {
    status = 1;
    videoFile.play();
}

function crear() {
    setInterval(temporizador, 1000);
    var canvas = createCanvas(1280, 720);
    canvas.parent('sketch-holder');
    canvas.position(320, 130)

    videoFile = createVideo('video.mp4', videoLoad);
    videoFile.hide();
    boton = createButton('Continuar ➡');
    boton.mousePressed(continuar);
    boton.style('border-radius', '12px');
    boton.style('background-color', '#4CAF50');
    boton.style('border', '4px solid #000000');
    boton.style('font-size', '30px');
    boton.style('color', 'white');
    boton.hide();

    botoneEnviar = createButton('Enviar');
    botoneEnviar.mousePressed(enviar);
    botoneEnviar.style('border-radius', '12px');
    botoneEnviar.style('background-color', '#4CAF50');
    botoneEnviar.style('border', '4px solid #000000');
    botoneEnviar.style('font-size', '30px');
    botoneEnviar.style('color', 'white');
    botoneEnviar.hide();

    botonReiniciar = createButton('Reiniciar');
    botonReiniciar.style('border-radius', '12px');
    botonReiniciar.style('background-color', '#008CBA');
    botonReiniciar.style('border', '4px solid #FFFFFF');
    botonReiniciar.style('font-size', '30px');
    botonReiniciar.style('color', 'white');
    botonReiniciar.parent('sketch-holder');
    botonReiniciar.mousePressed(reiniciar);

    botonSalir = createButton('Salir');
    botonSalir.style('border-radius', '12px');
    botonSalir.style('background-color', '#f44336');
    botonSalir.style('border', '4px solid #FFFFFF');
    botonSalir.style('font-size', '30px');
    botonSalir.style('color', 'white');
    botonSalir.parent('sketch-holder');
    botonSalir.mousePressed(salir);

    botonReiniciar.position(1270, 130);
    botonReiniciar.size(160, 60);
    botonReiniciar.show();

    botonSalir.position(1440, 130);
    botonSalir.size(160, 60);
    botonSalir.show();

    videoFile.showControls();

    for (var i = 0; i < 1; i++) {
        boxes.push(new Box());
    }

    for (var i = 0; i < 1; i++) {
        monedas.push(new moneda());
    }

    for (var i = 0; i < 1; i++) {
        monedas2.push(new moneda2());
    }

}

function temporizador() {
    if (puntaje == 1) {
        contador++;

        minutos = floor(contador / 60);
        segundos = contador % 60;
        tiempo = minutos.toString() + ":" + segundos.toString();

    }
}

function draw() {
    print(intentos, tiempo, t);
    video = image(videoFile, 0, 0, 1280, 720);
    t = videoFile.time();

    if (t >= 34.00 && t <= 59.00) {
        mostrar();
    }

    if (t >= 71.00 && t <= 82.00) {
        mostrar();
    }

    if (t >= 93.00 && t <= 119.00) {
        mostrar();
    }

    if (t >= 133.00 && estado == 1) {
        videoFile.play();
        videoFile.time(71.90);
        numManzana = 0;

    }

    if (t >= 127.00 && estado == 0) {
        videoFile.play();
        videoFile.time(39.90);
        numMoneda = 0;
    }

    if (t >= 141.50 && estado == 2) {
        videoFile.play();
        videoFile.time(94.00);
        numMonedaP = 0;
        numMoneda = 12;
    }

    if (t >= 40.00 && t <= 40.50 && escena == 0) {
        desTiempo = 1;
        estado = 0;
        puntaje = 1;
        for (var i = 0; i < monedas.length; i++) {
            videoFile.pause();
            monedas[i].show();
            stroke(0);
            strokeWeight(10);
            textSize(50);
            text(numMoneda.toString(), 190, 680);

            stroke(0);
            strokeWeight(2);
            fill(238, 250, 255);
            rect(350, 140, 575, 65, 10);

            fill(0);
            stroke(0);
            strokeWeight(0);
            textSize(35);
            text("Arrastra las monedas hacia Juan", 380, 185);
            boton.show();
            boton.position(1380, 745);
            boton.size(200, 80);

            if (monedas[i].xpos >= 62 && monedas[i].xpos <= 227 && monedas[i].ypos >= 451 && monedas[i].ypos <= 712) {
                monedas.splice(i, 1);
                monedas.push(new moneda(tempmod[i]));
                numMoneda++;
            }
        }
    }

    if (t >= 72.00 && t <= 72.90 && escena == 1) {
        desTiempo = 1;
        estado = 1;
        puntaje = 1;

        for (var i = 0; i < boxes.length; i++) {
            videoFile.pause();
            boxes[i].show();

            stroke(0);
            strokeWeight(2);
            fill(238, 250, 255);
            rect(330, 140, 615, 65, 10);

            fill(0);
            stroke(0);
            strokeWeight(0);
            textSize(35);
            text("Arrastra las manzanas hacia el carrito", 345, 185);

            fill(245, 218, 178);
            stroke(0);
            strokeWeight(4);
            rect(430, 257, 400, 115, 10);

            fill(255);
            stroke(0);
            strokeWeight(5);
            textSize(100);
            text("3 +   = 9", 450, 350);
            textSize(50);
            text(numManzana.toString(), 725, 630);
            textSize(100);
            fill(0, 102, 153);
            text(numManzana.toString(), 600, 350);
            boton.show();
            boton.position(1380, 745);
            boton.size(200, 80);

            if (boxes[i].xpos >= 511 && boxes[i].xpos <= 796 && boxes[i].ypos >= 570 && boxes[i].ypos <= 685) {
                boxes.splice(i, 1);
                boxes[i] = new Box(tempman[i]);
                numManzana++;
            }
        }
    }

    if (t >= 93.40 && t <= 94.90 && escena == 2) {
        desTiempo = 1;
        estado = 2;
        puntaje = 1;
        for (var i = 0; i < monedas2.length; i++) {
            videoFile.pause();
            monedas2[i].show();

            stroke(0);
            strokeWeight(2);
            fill(238, 250, 255);
            rect(330, 140, 615, 65, 10);

            fill(0);
            stroke(0);
            strokeWeight(0);
            textSize(35);
            text("Arrastra las monedas hacia el cajero", 345, 185);

            fill(245, 218, 178);
            stroke(0);
            strokeWeight(4);
            rect(410, 257, 450, 115, 10);

            fill(255);
            stroke(0);
            strokeWeight(5);
            textSize(100);
            text("12 - 6 =", 420, 350);
            textSize(50);
            text(numMonedaP.toString(), 989, 403);
            textSize(100);
            fill(0, 102, 153);
            text(numMonedaP.toString(), 790, 350);
            boton.show();
            boton.position(1380, 745);
            boton.size(200, 80);

            if (monedas2[i].xpos >= 914 && monedas2[i].xpos <= 1102 && monedas2[i].ypos >= 265 && monedas2[i].ypos <= 443) {
                monedas2.splice(i, 1);
                monedas2.push(new moneda2(tempmod2[i]));
                numMoneda--;
                numMonedaP++;
            }
        }
    }

    if (t >= 118.00 && escena == 3) {
        videoFile.pause();
        fill(245, 218, 178);
        stroke(0);
        strokeWeight(4);
        rect(415, 120, 510, 390, 10);

        fill(100, 200, 50);
        stroke(0);
        strokeWeight(3);
        textSize(60);
        text(tiempo.toString(), 760, 290);
        text(intentos.toString(), 840, 380);

        fill(255);
        stroke(0);
        strokeWeight(3);
        textSize(60);
        text("Tiempo :", 500, 290);
        text("Incorrectas :", 500, 380);
        text(name, 540, 200);

        botoneEnviar.show();
        botoneEnviar.position(890, 600);
        botoneEnviar.size(200, 80);
    }
}

function mostrar() {
    stroke(255);
    strokeWeight(2);
    fill(0, 102, 153);
    rect(0, 0, 230, 55);
    stroke(0);
    fill(255);
    strokeWeight(3);
    textSize(40);
    text(numMoneda.toString(), 60, 40);
    text(numManzana.toString(), 190, 40);
    image(img2, 13, 5, 40, 40);
    image(img, 140, 0, 50, 50);
}

function continuar() {
    if (estado == 0) {
        boton.hide();
        if (numMoneda == 12) {
            puntaje = 0;
            videoFile.play();
            escena = 1;
            desTiempo = 0;
        }
        else {
            perder();
            intentos++;
        }
    }

    if (estado == 1) {
        boton.hide();
        if (numManzana === 6) {
            puntaje = 0;
            videoFile.play();
            escena = 2;
            desTiempo = 0;
        }
        else {
            perder();
            intentos++;
        }
    }

    if (estado == 2) {
        boton.hide();
        if (numMoneda == 6) {
            videoFile.play();
            escena = 3;
            desTiempo = 0;
            puntaje = 0;
        }
        else {
            perder();
            intentos++;
        }
    }
}

function perder() {
    if (estado == 0) {
        videoFile.play();
        videoFile.time(121.00);
    }

    if (estado == 1) {
        videoFile.play();
        videoFile.time(128.00);
    }

    if (estado == 2) {
        videoFile.play();
        videoFile.time(134.00);
    }
}

function reiniciar() {
    numMoneda = 0;
    numManzana = 0;
    numMonedaP = 0;
    estado = 0;
    escena = 0;
    puntaje = 0;
    tiempo = 0;
    desTiempo = 0;
    videoFile.stop();
    videoFile.play();
    boton.hide();
    botoneEnviar.hide();
    tiempo = 0;
    intentos = 0;
    minutos = 0;
    contador = 0;
    segundos = 0;
    tiempo = "";
}

function enviar() {
    print("ENVIAR");
    intentos, tiempo

    window.location = login
}

function salir() {
    remove();
}

function mousePressed() {
    print(mouseX, mouseY);
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

    for (var i = 0; i < monedas2.length; i++) {
        if (monedas2[i].boxover == true) {
            monedas2[i].locked = true;
        } else {
            monedas2[i].locked = false;
        }
        monedas2[i].xoffset = mouseX - monedas2[i].xpos;
        monedas2[i].yoffset = mouseY - monedas2[i].ypos
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

    for (var i = 0; i < monedas2.length; i++) {
        if (monedas2[i].locked) {
            monedas2[i].xpos = mouseX - monedas2[i].xoffset;
            monedas2[i].ypos = mouseY - monedas2[i].yoffset;
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

    for (var i = 0; i < monedas2.length; i++) {
        monedas2[i].locked = false;
    }
}

function keyTyped() {
    if (key == ' ') {
        if (status == 1) {
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
    } else if (key == '+' && status == 1 && volume < 0.9) {
        volume += 0.1;
        videoFile.volume(volume);
    } else if (key == '-' && status == 1 && volume > 0.1) {
        volume -= 0.1;
        videoFile.volume(volume);
    }

    if (key == 'd' && status == 1 && desTiempo == 0) {
        videoFile.time(t + f);

        if (t >= 35.00 && t <= 39.90) {
            videoFile.time(39.99);
        }

        if (t >= 68.00 && t <= 71.90) {
            videoFile.time(71.99);
        }

        if (t >= 90.00 && t <= 93.00) {
            videoFile.time(93.99);
        }

    }

    if (key == 'a' && status == 1 && desTiempo == 0) {

        videoFile.time(t - f);

        if (escena == 1 && t <= 42.00) {
            videoFile.time(43.00);
        }

        if (escena == 2 && t <= 74.99) {
            videoFile.time(75.00);
        }

        if (escena == 3 && t <= 94.00) {
            videoFile.time(94.99);
        }
    }
}

function Box() {

    this.xpos = 954;
    this.ypos = 260;
    this.boxsize = 100;
    this.boxover = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;

    this.show = function () {

        if (mouseX > this.xpos - this.boxsize && mouseX < this.xpos + this.boxsize &&
            mouseY > this.ypos - this.boxsize && mouseY < this.ypos + this.boxsize) {
            this.boxover = true;
            fill(255);
        } else {
            this.boxover = false;
            noStroke();
            fill(255);
        }
        image(img, this.xpos, this.ypos, this.boxsize, this.boxsize);
    };
}

function moneda() {

    this.xpos = 680;
    this.ypos = 375;
    this.boxsize = 80;
    this.boxover = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;

    this.show = function () {

        if (mouseX > this.xpos - this.boxsize && mouseX < this.xpos + this.boxsize &&
            mouseY > this.ypos - this.boxsize && mouseY < this.ypos + this.boxsize) {
            this.boxover = true;
            fill(255);

        } else {
            this.boxover = false;
            noStroke();
            fill(255);
        }
        image(img2, this.xpos, this.ypos, this.boxsize, this.boxsize);
    };
}

function moneda2() {

    this.xpos = 611;
    this.ypos = 562;
    this.boxsize = 60;
    this.boxover = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;

    this.show = function () {

        if (mouseX > this.xpos - this.boxsize && mouseX < this.xpos + this.boxsize &&
            mouseY > this.ypos - this.boxsize && mouseY < this.ypos + this.boxsize) {
            this.boxover = true;
            fill(255);
        } else {
            this.boxover = false;
            noStroke();
            fill(255);
        }
        image(img2, this.xpos, this.ypos, this.boxsize, this.boxsize);
    };
}
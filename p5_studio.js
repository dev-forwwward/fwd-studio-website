var containerW;
var containerH;

let wheels = [];
let outerWheel;
let nwheels = 3;
let wheelLines = 50;
let radius = 150;
let radiusInterval = 80;
let alpha = 50;
let strokeVal = 4;
let strokeColor;

function setup() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;
  console.log("TESTE");
  var canvas = createCanvas(containerW + 22, containerH);
  canvas.parent("canvas-c");

  radiusSizeCheck();
  radiusInterval = width * 0.09;
  strokeColor = color(255);

  for (let i = 0; i < nwheels; i++) {
    wheels[i] = new Wheel(
      containerW,
      containerH / 2,
      radius,
      wheelLines,
      strokeColor,
      strokeVal * 0.0005 * width,
      alpha,
    );
    alpha = alpha * 2;
    radius -= radiusInterval + 20;
    console.log("alpha: " + alpha + "  radius: " + radius);
  }

  outerWheel = new Wheel(
    containerW,
    containerH / 2,
    wheels[0].radius,
    wheelLines,
    0,
    strokeVal * 0.0005 * width,
    255,
  );
  outerWheel.c = color(15, 16, 16);
  outerWheel.colorStop(0.75);

  wheels[1].orientation = -1;
}

// make canvas size responsive (based on container)
function windowResized() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;
  resizeCanvas(containerW, containerH, true);

  radiusSizeCheck();

  radiusInterval = width * 0.09;

  for (let i = 0; i < nwheels; i++) {
    wheels[i].xc = width;
    wheels[i].yc = height / 2;
    wheels[i].radius = radius;
    radius -= radiusInterval + 20;
    wheels[i].radiusInterval = radiusInterval;
    wheels[i].stroke = strokeVal * 0.0005 * width;
  }

  outerWheel.xc = width;
  outerWheel.yc = height / 2;
  outerWheel.radius = wheels[0].radius;
  outerWheel.radiusInterval = radiusInterval;
  //outerWheel.stroke = strokeVal * 0.0005 * width + 2;
}

function draw() {
  background(15, 16, 16);

  if (width <= 767) {
    translate(0, -height * 0.3);
  } else {
    translate(0, height / 2);
  }

  for (let i = 0; i < nwheels; i++) {
    wheels[i].drawWheel();

    // opacity levels for each wheel
    push();

    if (width <= 767) {
      translate(0, height * 0.3);
    } else {
      translate(0, -(height - 5) / 2);
    }

    rectMode(CORNER);
    fill(15, 16, 16, 100 - i * 5);
    rect(0, 0, width + 5, height + 5);
    pop();
  }
  outerWheel.drawWheel();
}

function radiusSizeCheck() {
  if (width <= 767) {
    radius = width * 0.5;
  } else {
    radius = width * 0.32;
  }
}

class Line {
  constructor(xa, ya, xb, yb, stroke) {
    this.xa = xa;
    this.ya = ya;
    this.xb = xb;
    this.yb = yb;
    this.stroke = stroke;
    this.c = 255;
    this.alpha = 255;
    this.colorStop = 0.15;
  }

  drawLine(c, alpha) {
    this.c = c;
    this.alpha = alpha;
    let gradient = drawingContext.createLinearGradient(
      this.xa,
      this.ya,
      this.xb,
      this.yb,
    );
    gradient.addColorStop(this.colorStop, color(15, 16, 16, 0));
    // ** TEMPORARILY COMMENTED
    //gradient.addColorStop(1, color(this.c, this.alpha));
    gradient.addColorStop(1, color(this.c));

    drawingContext.strokeStyle = gradient;

    strokeWeight(this.stroke);
    //stroke(this.color, this.alpha);
    line(this.xa, this.ya, this.xb, this.yb);
  }
}

class Wheel {
  constructor(xc, yc, radius, nline, c, stroke, alpha) {
    this.xc = xc;
    this.yc = yc;
    this.radius = radius;
    this.nline = nline;
    this.c = c;
    this.stroke = stroke;
    this.alpha = alpha;
    this.angle = 0;
    this.angle2 = 0;
    this.rotateAngle = 0;
    this.orientation = 1;

    this.lineCenterX = this.xc + this.radius * Math.cos(this.angle);
    this.lineCenterY = this.yc + this.radius * Math.sin(this.angle);

    this.l = [];

    for (let i = 0; i < this.nline; i++) {
      this.angle += TWO_PI / this.nline;

      this.lineCenterX = this.radius * Math.cos(this.angle);
      this.lineCenterY = this.radius * Math.sin(this.angle);

      this.l[i] = new Line(
        0,
        0,
        this.lineCenterX,
        this.lineCenterY,
        this.stroke,
      );
      //this.l[i].alpha = this.alpha;
    }
  }

  drawWheel() {
    this.angle2 += 0.001;
    for (let i = 0; i < this.nline; i++) {
      this.angle += TWO_PI / this.nline;

      this.lineCenterX = this.radius * Math.cos(this.angle);
      this.lineCenterY = this.radius * Math.sin(this.angle);

      this.l[i].xb = this.lineCenterX;
      this.l[i].yb = this.lineCenterY;

      this.l[i].stroke = this.stroke;

      push();
      translate(this.xc, this.yc);
      rotate(this.angle2 * this.orientation);
      this.l[i].drawLine(this.c, this.alpha);
      pop();
    }
  }

  colorStop(cs) {
    for (let i = 0; i < this.nline; i++) {
      this.l[i].colorStop = cs;
    }
  }
}

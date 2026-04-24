var containerW;
var containerH;

let col = 34;
let row = 28;
let spacing = 25;

let size = 4;
let weight = 2.5;

let angX = 0;
let angY = 0;
let newAngX = 0;
let newAngY = 0;

let angle = -17;

let modules = [];
let count = 0;

var omega = 0;
let newOmega;

function setup() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;

  var canvas = createCanvas(containerW + 22, containerH, WEBGL);
  canvas.parent("canvas-c");

  for (let i = 0; i < row * col; i++) {
    modules[i] = i / 100;
    //console.log(modules[i]);
  }

  frameRate(24);

  //camera(100, 800, 680);
  camera(width / 80, width * 0.35, height * 1.2);

  stroke(255);
  strokeWeight(weight);
  drawWave();
}

// make canvas size responsive (based on container)
function windowResized() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;
  resizeCanvas(containerW, containerH, true);

  //angle = -8;

  camera(width / 80, width * 0.35, height * 1.2);

  drawWave();
}

function draw() {
  /*strokeWeight(weight);
  drawWave();*/
}

function drawWave() {
  // wave angle freeze
  angle = -11;
  omega = 0;
  count = 0;

  push();

  translate(width * 0.4, height * 0.15);

  newOmega = map(Math.cos(omega), -0.99, 0.99, -0.05, 0.01);

  rotateY(0.14 + newOmega);

  rotateX(0.64 + newOmega);
  rotate(0.65 + newOmega);
  drawLines();
  pop();

  omega += 0.008;
}

function drawLines() {
  background(15, 16, 16);

  count = 0;

  // row
  for (let i = 0; i < row; i++) {
    angle += 0.005;

    for (let j = 0; j < col; j++) {
      angle += 0.0001;
      angY = Math.cos(angle / 5 - (j + i) / 100);
      angX = Math.sin(angle / 5 - (j + i) / 200);

      newAngX = map(angX, -0.99, 0.99, -0.0015, 0.0025);
      newAngY = map(angY, -0.99, 0.99, -0.0035, 0.0015);

      rotateY(newAngY);

      push();

      halfAngX = map(angX, -0.99, 0.99, 0.25, 0.4);

      translate(-i * spacing, -j * spacing, 0);
      rotate(halfAngX);
      translate(i * spacing, j * spacing, 0);

      // Module Variation PAUSED
      //modules[count] += angX * 0.5;

      // line mode
      strokeWeight(weight / 3);
      line(
        i * spacing,
        j * spacing,
        0,
        i * spacing,
        j * spacing,
        modules[count]
      );
      pop();

      count += 1;
    }
  }
}

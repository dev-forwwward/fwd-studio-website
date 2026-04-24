var containerW;
var containerH;

let dot = [];
let dotSize = 2;

const initRows = 14;
const rowsDesktop = 7;
const rowsTablet = 10;
const rowsMobile = 14;

const initColumns = 20;

let rows = initRows;
let columns = initColumns;

let alpha = 0;

let padding;
let paddingV;
let spacingW;
let spacingH;

function setup() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;

  var canvas = createCanvas(containerW, containerH);
  canvas.parent("canvas-c");

  objListInit(dot);
  responsiveMatrix();
}

// make canvas size responsive (based on container)
function windowResized() {
  containerW = document.querySelector("#canvas-c").offsetWidth;
  containerH = document.querySelector("#canvas-c").offsetHeight;

  /*padding = containerW*0.04;
    paddingV = containerH*0.02;
    spacingW = (containerW-2*padding)/(columns-1);
    spacingH = (containerH-2*paddingV)/(rows-1);*/
  responsiveMatrix();

  // dot size fixed value
  //dotSizeCheck();

  resizeCanvas(containerW, containerH, true);
}

function draw() {
  let index = 0;
  let count = 0;

  background(1);

  // rows
  for (i = padding; i < containerW; i += spacingW) {
    // columns
    for (j = paddingV; j < containerH; j += spacingH) {
      index++;

      dot[index].size = dotSize;
      dot[index].drawVector(i, j);
    }
  }

  // rows
  for (i = padding; i < containerW; i += spacingW) {
    alpha = abs(
      map(
        (count * spacingH + spacingH) ^ 2,
        0,
        containerH - spacingH * 2,
        -225,
        225,
      ),
    );

    /*push();
    rectMode(CORNER);
    fill(1, 100, 122, 255 - alpha);
    noStroke();
    //rect(0, spacingH * 1.74 + count * spacingH + 4, containerW, spacingH);
    rect(0, paddingV * 0.95 * rows + count * spacingH, containerW, spacingH);
    pop();

    count++;*/
  }

  //console.log(frameRate());
} //draw()

function dotSizeCheck() {
  dotSize = map(width, 320, 1200, 2, 4);

  if (width > 1200) {
    dotSize = 4;
  }
}

class Vector {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.opacity;
  }

  drawVector(x, y) {
    this.vector = new p5.Vector(mouseX - x, mouseY - y);

    let n;

    n = map(
      dist(x, y, mouseX, mouseY),
      0,
      dist(0, 0, width, height),
      containerW * 0.05 * 0.1,
      containerW * 0.05,
    );

    /*if (width > 901) {
      n = map(
        dist(x, y, mouseX, mouseY),
        0,
        dist(0, 0, width, height),
        containerW * 0.05 * 0.1,
        containerW * 0.05,
      );
    } else if (width <= 901 && width > 580) {
      n = map(
        dist(x, y, mouseX, mouseY),
        0,
        dist(0, 0, width - padding * 2, height - padding * 2),
        containerW * 0.05 * 0.1,
        containerW * 0.05,
      );
    } else if (width <= 320) {
      n = map(
        dist(x, y, mouseX, mouseY),
        0,
        dist(0, 0, width - padding * 2, height - padding * 2),
        6 * 0.1,
        6,
      );
    } else {
      n = map(
        dist(x, y, mouseX, mouseY),
        0,
        dist(0, 0, width - padding * 2, height - padding * 2),
        containerW * 0.05 * 0.1,
        containerW * 0.05,
      );
    }*/

    this.vector.setMag(n);

    let gradient = drawingContext.createLinearGradient(
      x,
      y,
      x + this.vector.setMag(n).x,
      y + this.vector.setMag(n).y,
    );
    gradient.addColorStop(0.75, color(255, 200));
    gradient.addColorStop(0, color(0, 0));

    drawingContext.strokeStyle = gradient;

    strokeWeight(this.size);
    line(x, y, x + this.vector.setMag(n).x, y + this.vector.setMag(n).y);
  }

  setOpacity(val) {
    this.opacity = val;

    if (val <= 25) {
      this.opacity = 0;
    }
  }

  getOpacity() {
    return this.opacity;
  }
}

function objListInit(list) {
  padding = containerW * 0.04;
  paddingV = containerH * 0.02;
  spacingW = (containerW - 2 * padding) / (columns - 1);
  spacingH = (containerH - 2 * paddingV) / (rows - 1);

  // dot size fixed value
  //dotSizeCheck();

  let index = 0;
  for (i = padding; i < containerW; i += spacingW) {
    for (j = paddingV; j < containerH; j += spacingH) {
      index++;
      list[index] = new Vector(i, j, dotSize);
      //list[index].setOpacity(abs(map(j^2, padding, containerH-spacingH, -200, 200)));
      //console.log(list[index].getOpacity());

      list[index].drawVector(i, j);
    }
  }
}

function responsiveMatrix() {
  if (containerW > 901) {
    rows = rowsDesktop;
  } else if (containerW <= 901 && containerW > 480) {
    rows = rowsTablet;
  } else if (containerW <= 480) {
    rows = rowsMobile;
  } else {
    rows = initRows;
  }

  padding = containerW * 0.04;
  paddingV = containerH * 0.04;
  spacingW = (containerW - 2 * padding) / (columns - 1);
  spacingH = (containerH - 2 * paddingV) / (rows - 1);
}

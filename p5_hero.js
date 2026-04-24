let navEl = document.querySelector(".fwd-navbar");

var containerW;
var containerH;

let dot = [];
let dotSize = 2;
//let dotSize = getRandomInt(1, 9);

let initRows = 10;
let initColumns = 15;
/*let initRows = getRandomInt(5, 11);
let initColumns = getRandomInt(9, 16);*/

let rows = initRows;
let columns = initColumns;

let padding;
let spacingW;
let spacingH;

let vectorMaxSize = 20;
//let vectorMaxSize = getRandomInt(16, 21);


document.addEventListener("DOMContentLoaded", function () {


    if (document.querySelector("#canvas-c")) {

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        function setup() {
            containerW = document.querySelector("#canvas-c").offsetWidth;
            containerH = document.querySelector("#canvas-c").offsetHeight;

            // Adjust canvas height at start (must be window total height - navbar height)
            //containerH = document.querySelector("#canvas-c").offsetHeight - navEl.offsetHeight;

            var canvas = createCanvas(containerW, containerH);
            canvas.parent("canvas-c");

            vectorMaxSize = containerW * 0.05;

            //responsiveMatrix();
            resizeCanvas(containerW, containerH, true);

            objListInit(dot);
            responsiveMatrix();
        }

        // make canvas size responsive (based on container)
        function windowResized() {
            containerW = document.querySelector("#canvas-c").offsetWidth;
            containerH = document.querySelector("#canvas-c").offsetHeight;

            // Adjust canvas height at start (must be window total height - navbar height)
            //containerH = document.querySelector("#canvas-c").offsetHeight - navEl.offsetHeight;

            vectorMaxSize = containerW * 0.05;

            resizeCanvas(containerW, containerH, true);
            objListInit(dot);
            responsiveMatrix();
        }

        let count = 0;
        function draw() {
            let index = 0;

            background(0);

            for (i = padding; i < containerW; i += spacingW) {
                for (j = padding; j < containerH; j += spacingH) {
                    index++;
                    dot[index].drawVector(i, j + 50);
                }
            }
            count++;
        }

        class Vector {
            constructor(xpos, ypos, size) {
                this.xpos = xpos;
                this.ypos = ypos;
                this.size = size;
                this.opacity;
                this.vector;
            }

            drawVector(x, y) {
                this.vector = new p5.Vector(mouseX - x, mouseY - y);

                let n = map(
                    dist(x, y, mouseX, mouseY),
                    0,
                    dist(0, 0, width - padding * 2, height - padding * 2),
                    vectorMaxSize * 0.1,
                    vectorMaxSize,
                );
                this.vector.setMag(n);

                let gradient = drawingContext.createLinearGradient(
                    x,
                    y,
                    x + this.vector.setMag(n).x,
                    y + this.vector.setMag(n).y,
                );
                gradient.addColorStop(0.8, color(255));
                gradient.addColorStop(0, color(0, 0));

                drawingContext.strokeStyle = gradient;

                strokeWeight(this.size);
                line(x, y, x + this.vector.x, y + this.vector.y);
            }
        }

        function objListInit(list) {
            /*padding = containerW * 0.04;
            spacingW = (containerW - 2 * padding) / (columns - 1);
            spacingH = (containerH - 2 * padding) / (rows - 1);*/

            spacingW = (containerW - 2 * containerW * 0.04) / (columns - 1);
            spacingH = (containerH - 2 * containerW * 0.04) / (rows - 1);
            padding = spacingW / 2;

            let index = 0;
            for (i = padding; i < containerW; i += spacingW) {
                for (j = padding; j < containerH; j += spacingH) {
                    index++;

                    // define each vector properties, no need to draw them at this time
                    list[index] = new Vector(i, j, dotSize);
                }
            }
        }

        function responsiveMatrix() {
            if (containerW > 768) {
                columns = initColumns;
                rows = initRows;
                //console.log("LARGE");
            } else if (containerW >= 400 && containerW <= 768) {
                columns = initColumns / 2;
                rows = initRows - parseInt(initRows * 0.2);

                //console.log("MID");
            } else if (containerW < 400) {
                columns = parseInt(initColumns * 0.2) + 2;
                //console.log("SMALL");
            }

            /*
            padding = containerW * 0.015;
            spacingW = (containerW - 2 * padding) / (columns - 1);
            spacingH = (containerH - 2 * padding) / (rows - 1);*/

            spacingW = (containerW - 2 * containerW * 0.04) / (columns - 1);
            spacingH = (containerH - 2 * containerW * 0.04) / (rows - 1);
            padding = spacingW / 2;
        }
    }

});
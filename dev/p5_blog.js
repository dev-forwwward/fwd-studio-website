// based on P5.js code by BarneyCodes

const numStars = 120;
let stars = [];

function setup() {

    containerW = document.querySelector("#canvas-c").offsetWidth;
    containerH = document.querySelector("#canvas-c").offsetHeight;

    var canvas = createCanvas(containerW, containerH);
    canvas.parent("canvas-c");

    for (let i = 0; i < numStars; i++) {
        stars.push(new Star(random(width), random(height)));
    }
}

function draw() {
    background(0, 80);

    // map mouse x coordinate (0.005 to 0.2)
    // and save to acceleration factor var
    const acc = map(mouseX, 0, width, 0.015, 0.3);

    // update stars array, filter out star elements that are not visible
    // update remaining ones
    stars = stars.filter(star => {
        star.draw();
        star.update(acc);
        return star.isActive();
    });

    // because we removed inactive star elements above, we must now 
    // refill the array with new elements so we never run out
    while (stars.length < numStars) {
        stars.push(new Star(random(width * 0.7, width * 0.9), random(height * 0.3, height * 0.7)));
    }
}

// make canvas size responsive (based on container)
function windowResized() {
    containerW = document.querySelector("#canvas-c").offsetWidth;
    containerH = document.querySelector("#canvas-c").offsetHeight;

    resizeCanvas(containerW, containerH, true);
}

class Star {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.prevPos = createVector(x, y);

        this.vel = createVector(0, 0);

        this.ang = atan2(y - (height / 2), x - (width * 0.8));
    }

    // returns boolean
    isActive() {
        return onScreen(this.prevPos.x, this.prevPos.y);
    }

    // update position
    update(acc) {
        this.vel.x += cos(this.ang) * acc;
        this.vel.y += sin(this.ang) * acc;

        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    // draw star
    draw() {

        // map vel magnitude to determine star opacity (the more velocity it has the clearer it gets)
        const alpha = map(this.vel.mag(), 0, 3, 0, 200);


        // map vel magnitude to determine star stroke weight (the more velocity it has the bigger it gets)
        let starWeight = map(this.vel.mag(), 0, 3, .5, 2.5);

        let swerveX = map(mouseX, 0, width, -50, 50);
        let swerveY = map(mouseY, 0, height, -15, 15);

        strokeWeight(starWeight);
        stroke(255, alpha);
        line(this.pos.x + swerveX, this.pos.y - swerveY, this.prevPos.x + swerveX, this.prevPos.y - swerveY);
    }
}

// check if argument values stay within canvas size limits
function onScreen(x, y) {
    return x >= 0 && x <= width && y >= 0 && y <= height;
}

/*
let f = 0;
let r;
let a;
let s;

function setup() {
    stroke(255);
    strokeWeight(2);

    containerW = document.querySelector("#canvas-c").offsetWidth;
    containerH = document.querySelector("#canvas-c").offsetHeight;

    // Adjust canvas height at start (must be window total height - navbar height)
    //containerH = document.querySelector("#canvas-c").offsetHeight - navEl.offsetHeight;

    var canvas = createCanvas(containerW, containerH);
    canvas.parent("canvas-c");
}

function draw() {
    background(0);
    for (r = width; r > 0; r -= 6) {
        for (a = 0; a < (t = TAU); a += t / 9) {
            strokeWeight((s = tan((r + a + f) % (t / 4)) * r) / r)
            stroke(width)
            point(width / 2 + cos(r / 7 + a) * s, height / 2 + sin(r / 10 + a) * s)
        }
    }
    f += 0.001

}*/
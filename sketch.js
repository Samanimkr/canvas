let brushColor = 0;
let brushSize = 16;

function setup() {
    const screenWidth = window.innerWidth || document.body.clientWidth;
    createCanvas(screenWidth, 480);
}

function draw() {
    strokeWeight(brushSize);
    stroke(brushColor);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
let brushColor = 0;
let brushSize = 5;

function setup() {
    createCanvas(100%, 480);
}

function draw() {
    strokeWeight(brushSize);
    stroke(brushColor);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
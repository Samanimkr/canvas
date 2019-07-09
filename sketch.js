const OPTIONS_MENU_HEIGHT = 115;
let brushColor = 'black';
let brushSize = 10;


function setup() {
    const screenWidth = window.innerWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.body.clientHeight;
    createCanvas(screenWidth, screenHeight - OPTIONS_MENU_HEIGHT);
}

function draw() {
    strokeWeight(brushSize);
    stroke(brushColor);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

const $colors = document.getElementsByClassName('color');
for (let color of $colors) color.addEventListener('click', handleColorChange);

function handleColorChange() {
    const isSelected = this.classList.contains('selected');
    if (!isSelected) {
        const prevColor = document.getElementsByClassName(brushColor)[0];
        prevColor.classList.remove('selected');
        this.classList.add('selected');

        brushColor = this.classList[1];
    }
}

const $slider = document.getElementById('slider');
$slider.addEventListener('input', function() {
    brushSize = this.value;
});
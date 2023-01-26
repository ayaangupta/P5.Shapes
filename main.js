function setup() {
    canvas = createCanvas(950, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {}

function draw() {
    image(video, 0, 0, 950, 600);
    fill(122, 0, 123);
    circle(10, 10, 40);
    circle(10, 590, 40);
    circle(940, 590, 40);
    circle(940, 10, 40);
    fill(0, 127, 127)
    rect(25, 585, 900, 20);
    rect(25, 5, 900, 20);
    rect(5, 27, 20, 545);
    rect(925, 27, 20, 545)

}

function take_snapshot() {
    save('student_name.png');
}
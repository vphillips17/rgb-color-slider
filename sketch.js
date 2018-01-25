var rSlider;
var gSlider;
var bSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    rSlider = createSlider(0, 255, 100);
    rSlider.position(20, 20);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, 50);
    bSlider = createSlider(0, 255, 255);
    bSlider.position(20, 80);
}


function draw(){
    redValue = rSlider.value();
    greenValue = gSlider.value();
    blueValue = bSlider.value();
    background(redValue, greenValue, blueValue);
    
    textSize(12);
    textAlign(LEFT,BASELINE);
    text("red", 150, 25);
    text("green", 150, 55);
    text("blue", 150, 85);
    
    text(redValue, 200, 25);
    text(greenValue, 200, 55);
    text(blueValue, 200, 85);
    
    textSize(20);
    textAlign(CENTER,CENTER);
    text("rgb("+redValue+", "+greenValue+", "+blueValue+")", width/2, height/2);
}

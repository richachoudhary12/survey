function preload(){
  bgImg = loadImage("charity.png");
}

function setup() {
  canvas = createCanvas(920,780);
  form = new Form();

}
  
function draw() {
background(bgImg);
drawSprites();
form.display();
}


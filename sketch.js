function setup() {
  createCanvas(800,400);
 a=createSprite(400, 200, 50, 50);
 a.shapeColor="red"
 b=createSprite(200,250,30,30)
 b.shapeColor="blue"
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  b.x=mouseX
  b.y=mouseY
  line(a.x,a.y,b.x,b.y)
  text(b.x-a.x+"distance",200,200)
  if(b.x-a.x<=a.width/2+b.width/2 && a.x-b.x<=a.width/2+b.width/2 && b.y-a.y<=a.height/2+b.height/2 && a.y-b.y<=a.height/2+b.height/2){
    a.shapeColor="pink"
    b.shapeColor="pink"
  }
  else{
  a.shapeColor="red"
  b.shapeColor="blue"

  }
}
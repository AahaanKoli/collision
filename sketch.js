var frect,mrect









function setup() {
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
mrect=createSprite(400,200,50,50)



 frect.shapeColor='lightblue'
mrect.shapeColor='lightblue'




}

function draw() {
  background(0);  
  drawSprites();
mrect.x=mouseX
mrect.y=mouseY

 if(collision(mrect,frect)){

mrect.scale=2





 }

else{
mrect.scale=1
}











}



























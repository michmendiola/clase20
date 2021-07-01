function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
    fixedRect.shapeColor= "yellow";
    fixedRect.debug=true;
  
    movingRect=createSprite(400, 200, 80, 30);
    movingRect.shapeColor="green";
    movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
  //200>65
  fixedRect.shapeColor= "red"; 
  movingRect.shapeColor="red";
}
//movingRect.x=400
//fixedRect.x=200
//400-200=200
//fixedRect.width=50
//50/2=25
//movingRect.width=80
//80/2=40

else {
  fixedRect.shapeColor= "orange"; 
  movingRect.shapeColor="orange";
}






  drawSprites();
}





















var fixedrect,movingrect,anotherRect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 100, 80, 50);
  movingrect=createSprite(400, 200, 50, 50);
  anotherrect=createSprite(400, 300, 90, 50);

  movingrect.debug=true;
  fixedrect.debug=true;

  fixedrect.velocityX=5;
  fixedrect.velocityY=5;

  fixedrect.shapeColor=("green");
  movingrect.shapeColor=("green");
}

function draw() {
  background("black");  

 movingrect.x=mouseX;
  movingrect.y=mouseY;

  if (isTouching(movingrect,fixedrect)){
  text("rectangle is colliding",200,300)
  }

  bounceOff(movingrect,fixedrect);

 drawSprites();

}
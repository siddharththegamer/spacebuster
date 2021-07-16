var bk,bkImg;
var ship,shipImg;
var danger,dangerImg;
var danger2,danger2Img;
var score = 0;
var blast,blastImg;
var dangerGroup;







function preload(){
bk = loadImage("space/space.jpg");
shipImg = loadImage("battleship2.png");
dangerImg = loadImage("alienballs.png");
danger2Img = loadImage("enemy2.png");
blastImg = loadImage("explosion.png")
}



function setup(){
createCanvas(1536,753);

ship = createSprite(750,400);
ship.addImage("ship",shipImg);
ship.scale = 0.7;

score = 0;

blast = createSprite(750,400);
  blast.addImage(blastImg);
  blast.scale = 2;
  blast.visible = false;

  dangerGroup = new Group();
}






function draw(){
background(bk);
text("Score: "+ score, 100,80);

edges= createEdgeSprites();
ship.collide(edges);

score = score + Math.round(getFrameRate()/60);
    bk.velocityX = -(6 + 3*score/100);

if (bk.y < 1000){
  bk.y = bk.height/2;
}

if(dangerGroup.isTouching(ship)){
  blast.visible = true;

}

if(keyDown("LEFT_ARROW")){
  ship.x = ship.x-11;
}

if(keyDown("RIGHT_ARROW")){
  ship.x = ship.x+11;
}

if(keyDown("UP_ARROW")){
  ship.y = ship.y-11;

}

if(keyDown("DOWN_ARROW")){
  ship.y = ship.y+11;
}

var select_danger = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger == 1) {
      danger();
    
    }
  } 

   

 


drawSprites();

}

function danger() {
  var danger = createSprite(Math.round(random(100, 1000)),0, 20, 20);
  danger.addImage(dangerImg);
  danger.velocityY = 12;
  danger.lifetime = 150;
  danger.scale = 0.3;
  
}
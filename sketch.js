GameState = 1
var boy,boyImage;
var kidnapper;
var ground,ground2
var barrel,barrelImage
var life = 3 ;
var guard,guardImage
var score = 0 ; 
var coin
function preload(){
  boyImage = loadImage("the boy.png");
  barrelImage = loadImage("barrel.jfif");
  guardImage = loadImage("guard.jfif");
}

function setup() {
  createCanvas(displayWidth- 200, displayHeight- 200);

 boy = createSprite(15,170,20,20);
 boy.addImage("boy",boyImage);
 boy.scale = 0.4 ;
 barrel = createSprite(450,440,20,20)
 barrel.addImage("barrel",barrelImage);
 barrel.scale = 0.5 ; 
 ground = createSprite(200,190,400,10);
ground2 = createSprite(450,displayHeight - 220,displayWidth +100  ,10)
guard = createSprite(1000,420,20,20);
guard.addImage(guardImage);
guard.scale = 0.5
kidnapperGroup = new Group()
}

function draw() {
 background (180)
 boy.visible=true
 boy.collide(ground)
 boy.collide(ground2)
 boy.velocityY = boy.velocityY + 0.8
 boy.debug = true
 if(GameState === 1){
 if(keyDown(UP_ARROW) ){ 
   if(boy.y>100 && boy.y < 145 ||(boy.y>400 && boy.y<455 ) ){
boy.velocityY =  - 8
console.log("hello")}
} 
if(keyDown(RIGHT_ARROW)){
  boy.x = boy.x + 10
}
if(keyDown(LEFT_ARROW) ){
  boy.x = boy.x - 10
}
if(boy.isTouching(barrel)){
  boy.visible = false ; 
}
if(boy.isTouching(kidnapperGroup ) &&  boy.visible === true ){
  life = life - 1
  boy.x = 15;
  boy.y = 170;
}
 
console.log(boy.x)
if(life === 0){
  GameState = 2
  
 
}



 console.log(boy.y)
 spawnKidnapper()
}
   drawSprites()
}

function reset(){
  gameState = PLAY;
gameOver.visible = false ;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  score = 0 ;
   trex.changeAnimation("running", trex_running);
 
  
}


function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnKidnapper() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var kidnapper = createSprite(800, 450 ,40,10);
   kidnapperImage = loadImage("download.jfif")
   kidnapper.addImage("kiddnaped",kidnapperImage)
    kidnapper.scale = 0.5
    kidnapper.velocityX = -3;
    
     //assign lifetime to the variable
    kidnapper.lifetime = 500;
    
    //adjust the depth
    
    
    //add each cloud to the group
    kidnapperGroup.add(kidnapper);
  }
}


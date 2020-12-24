
// number 4




function setup() {
  createCanvas(1600, 400);

 //for bullet number 7 
  

 //for wall number 5 
  

  bullet=createSprite(50, 200, 50,5);  
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  //wall sprite number 6

  wall.shapeColor=color(230,230,230);
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  
  // hint 2




  
  drawSprites();
 
}

function hasCollided(){
//hint 1

}



var iss, spaceCraft;
var hasDocked = false;
function preload(){
  bgImg = loadImage("spacebg.jpg")
  spCraftImg1 = loadImage("spacecraft1.png");
  spCraftImg2 = loadImage("spacecraft2.png");
  spCraftImg3 = loadImage("spacecraft3.png");
  spCraftImg4 = loadImage("spacecraft4.png");
  issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;

  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(spCraftImg1);
  spaceCraft.scale = 0.15

}
  




function draw() {
  background(bgImg);

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1)
  
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(spCraftImg3);
    spaceCraft.x = spaceCraft.x-1
  }

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(spCraftImg4)
    spaceCraft.x = spaceCraft.x+1
  }

  if(keyDown("UP_ARROW")){
    spaceCraft.addImage(spCraftImg2)
    spaceCraft.y = spaceCraft.y-1
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(spCraftImg1)
  }
}

  if(spaceCraft.y<=iss.y+70&&spaceCraft.x<=iss.x-10){
    hasDocked = true
    textSize(25)
    fill("white")
    text("Docking Successful",400,340)
  }
  drawSprites();
 
}
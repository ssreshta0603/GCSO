var car,wall;
var weight,speed;

function setup() {
  createCanvas(800,400);
  speed = random(50,90);
  weight = random(400,1500);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white";
 car.velocityX = speed;
 wall = createSprite(700,200,60,height/2);
 wall.shapeColor = color (80,80,80);
}

function draw() {
  background(0,0,0);  

  if(wall.x - car.x <(car.width+wall.width)/2)
  {
     car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22500;
  if(deformation < 180)
  {
      car.shapeColor= "green";
  }
  if(deformation < 180 && deformation >100)
  {
      car.shapeColor= "yellow";
  }
  if(deformation < 100)
  {
      car.shapeColor = "red";
  }
  }
  drawSprites();
}


var Scl;
var snake;
var food;
function setup() {
  createCanvas(600,600);
  frameRate(12);
  Scl = 16;
  snake = new Snake();
  food = new Food();
  food.Move();
  
}

function draw() {
  background(0);
  snake.Show();
  snake.Update();
  food.Show();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    snake.Direct(0, -1);
  }else if(keyCode == DOWN_ARROW){
    snake.Direct(0, 1);
  }else if(keyCode == LEFT_ARROW){
    snake.Direct(-1, 0);
  }else if(keyCode == RIGHT_ARROW){
    snake.Direct(1, 0);
  }
}

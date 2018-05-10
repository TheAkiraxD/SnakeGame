var game;

function setup() {
  createCanvas(600,600);
  game = new Game(16);
  game.Start();
}

function draw() {
  background(0);
  game.Run();
}
function keyPressed(){
  if(keyCode == UP_ARROW){
    game.SnakeMove(0, -1);
  }else if(keyCode == DOWN_ARROW){
    game.SnakeMove(0, 1);
  }else if(keyCode == LEFT_ARROW){
    game.SnakeMove(-1, 0);
  }else if(keyCode == RIGHT_ARROW){
    game.SnakeMove(1, 0);
  }
}

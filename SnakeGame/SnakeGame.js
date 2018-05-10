var game;

function setup() {
  createCanvas(600,600);
  StartGame();
}

function draw() {
  background(0);
  game.Run();
}

function StartGame(){
  game = null;
  game = new Game(16, 8);
  game.Start();
}

document.addEventListener('keydown', function (e) {
    var tchar = e.keyCode || e.which;
    if(tchar == SHIFT){
      game.SpeedUp();
    }
});

document.addEventListener('keyup', function (e) {
    var tchar = e.keyCode || e.which;
    if(tchar == SHIFT){
      game.SpeedNormal();
    }
});


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

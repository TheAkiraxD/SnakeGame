function Game(Scale, FrameRate){
  this.Scl = Scale;
  var food;
  var snake;
  var tail;
  
  this.Start = function(){
    frameRate(FrameRate);
    snake = new Snake(this.Scl);
    food = new Food(this.Scl);
    tail = new Tail(snake, this.Scl);
    tail.Start();
    food.Move();
  }
  
  this.Run = function(){
    snake.Show();
    snake.Update(food);
    food.Show();
    tail.Move();
    tail.Draw();
    this.CheckEnd();

  }
  
  this.SpeedUp = function(){
    frameRate(FrameRate*2);
  }
  
  this.SpeedNormal = function(){
    frameRate(FrameRate);
  }
  
  
  this.CheckEnd = function(){    
    if(snake.position.x < 0 || snake.position.x > width || snake.position.y < 0 || snake.position.y > height){
      alert("You lose :(");
      StartGame();
    }
    
    for(var i = 0; i < tail.array.length -1; i++){
      var pos = tail.array[i];
      var d = dist(snake.position.x, snake.position.y, pos.x, pos.y);
      
      if(d < 1){
        alert("You lose :(");
        StartGame();
      }
    }
  }

  this.SnakeMove = function(x,y){
    
    if(!((x != 0 && x == ( snake.x_Speed * -1)) || (y != 0 && y == (snake.y_Speed * -1))) ){
      snake.x_Speed = x;
      snake.y_Speed = y;
    }
    
    
  }
}

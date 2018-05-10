function Game(Scale){
  this.Scl = Scale;
  var food;
  var snake;
  var tail;

  
  this.Start = function(){
    frameRate(10);
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

  }
  
  this.SnakeMove = function(x,y){
    snake.x_Speed = x;
    snake.y_Speed = y;
  }
}

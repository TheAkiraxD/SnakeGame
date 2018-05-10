function Snake(Scl){
  this.position = new Position(0,0);
  this.x_Speed = 1;
  this.y_Speed = 0;
  this.Size = 1;
  
  this.Show = function(){
    fill(255);
    rect(this.position.x, this.position.y, Scl, Scl);
  }
  
  this.Update = function(food){
    this.position.x = this.position.x + this.x_Speed * Scl; 
    this.position.y = this.position.y + this.y_Speed * Scl;  
    
    this.position.x = constrain(this.position.x, 0, width-Scl);
    this.position.y = constrain(this.position.y, 0, height-Scl);
    
    if(this.position.x == food.x && this.position.y == food.y){
      food.Move();
      this.Size++;
    }
  }
  
}

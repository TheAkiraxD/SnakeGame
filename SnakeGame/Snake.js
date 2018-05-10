function Snake(){
  this.x = 0;
  this.y = 0;
  this.x_Speed = 1;
  this.y_Speed = 0;
  
  this.Show = function(){
    fill(255);
    rect(this.x, this.y, Scl, Scl);
  }
  
  this.Update = function(){
    this.x = this.x + this.x_Speed * Scl; 
    this.y = this.y + this.y_Speed * Scl;  
    
    this.x = constrain(this.x, 0, width-Scl);
    this.y = constrain(this.y, 0, height-Scl);
  }
  
  this.Direct = function(x, y){
    this.x_Speed = x;
    this.y_Speed = y;
  }
  
}

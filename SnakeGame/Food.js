function Food(){
  this.x;
  this.y;
  
  this.Move = function(){
    var cols = floor(width/Scl);
    var rows = floor(height/Scl);
    this.x = floor(random(cols))* Scl;
    this.y = floor(random(rows))* Scl;
  }
  
  this.Show = function(){
    fill(255,0,100);
    rect(this.x, this.y,Scl, Scl);
  
  }
  
}

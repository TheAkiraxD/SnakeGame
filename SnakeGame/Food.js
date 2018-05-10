function Food(Scl){
  this.x;
  this.y;
  
  this.Move = function(){
    var cols = floor(width/Scl);
    var rows = floor(height/Scl);
    this.x = floor(random(cols))* Scl;
    this.y = floor(random(rows))* Scl;
  }
  
  this.Show = function(){
    if(frameCount % 10 == 0){
      fill(0,0,0);
    }else{
      fill(255,0,190);
    }
    
    rect(this.x, this.y,Scl, Scl);
  
  }
  
}

function Tail(snake, Scl){
  this.array = [];
  
  this.Start = function(){
    this.array[snake.Size-1] = createVector(snake.position.x, snake.position.y);
  }
  
  this.Draw = function(){
    var z;
    if(this.array.length <= 1){
      z =1;
    }else{
      z = 0;
    }
    for(var x = z; x < this.array.length; x++){
      fill(255);
      rect(this.array[x].x, this.array[x].y, Scl, Scl);
    }
  }
  
  this.Move = function(){
    if(snake.Size === this.array.length){
      for(var i = 0; i < this.array.length-1; i++){
        this.array[i] = this.array[i+1];
      }
    }
    this.array[snake.Size-1] = createVector(snake.position.x, snake.position.y);
  }
  
 this.temporary = function(){
    if(this.array.length == 3){
      var texto = "[ ";
      for(var w = 0; w < this.array.length; w++){
        texto+= this.array[w].x + "," + this.array[w].y +" ][ ";
      }
      texto+= " ] - [ " + snake.position.x + "," + snake.position.y + " ]"
      console.log(texto);
    }
 }
  
  


}

function Tail(snake, Scl){
  var TArray = [];
  
  this.Start = function(){
    TArray[snake.Size-1] = createVector(snake.position.x, snake.position.y);
  }
  
  this.Draw = function(){
    var z;
    if(TArray.length <= 1){
      z =1;
    }else{
      z = 0;
    }
    for(var x = z; x < TArray.length; x++){
      fill(255);
      rect(TArray[x].x, TArray[x].y, Scl, Scl);
    }
  }
  
  this.Move = function(){
    if(snake.Size === TArray.length){
      for(var i = 0; i < TArray.length-1; i++){
        TArray[i] = TArray[i+1];
      }
    }
    TArray[snake.Size-1] = createVector(snake.position.x, snake.position.y);
  }
  
 this.temporary = function(){
    if(TArray.length == 3){
      var texto = "[ ";
      for(var w = 0; w < TArray.length; w++){
        texto+= TArray[w].x + "," + TArray[w].y +" ][ ";
      }
      texto+= " ] - [ " + snake.position.x + "," + snake.position.y + " ]"
      console.log(texto);
    }
 }
  
  


}

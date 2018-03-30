var Pez = function (x,y){

        this.x = x;
        this.y = y;
        this.imagen = new Image();
        this.imagen.src = "src/images/magikar1.png";
        this.collision = function(i){
          if( this.x + this.imagen.width >= pipe[i].x &&
            this.x <= pipe[i].x + pipeNorth.width &&
            (this.y <= pipe[i].y + pipeNorth.height ||
              this.y+this.imagen.height >= pipe[i].y+constant) ||
              this.y + this.imagen.height >=  canvas.height - fg.height){
                console.log("entre");
                golpe.play();
                location.reload();
        }
        }
}

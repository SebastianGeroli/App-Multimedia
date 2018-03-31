    
var Pez = function (x,y){

        this.x = x;
        this.y = y;
        this.width = 64;
        this.height = 64;       
        this._currentFrame = 0,
        this.imagen = new Image();
        this.imagen.src = "src/images/player.png";
        this.velocidad = 1;
        this.gravedad = 0.1;

        this.getNextFrame = function() {
          var now = Date.now();
          if (now - fpsCounter > 1000 / fps) {
              fpsCounter = now;
              this._currentFrame++;
              if (this._currentFrame > 2) this._currentFrame = 0;
          }
          return this._currentFrame;
      }
    
      
      this.salto = function() {
        this.velocidad = -2;
    },
    this.caida = function() {
        var now = Date.now();
        if (now - fallingCounter > 1000 / fps) {
            if (this.velocidad < 8) this.velocidad += this.gravedad;
            this.y += this.velocidad;
        }
    },
        //Funcion del pez que detecta las colisiones con los pipes y el suelo
        this.collision = function(i){
          if( this.x + this.imagen.width - 132 >= pipe[i].x &&
            this.x <= pipe[i].x + pipeNorth.width &&
            (this.y <= pipe[i].y + pipeNorth.height ||
              this.y+this.imagen.height >= pipe[i].y+constant) ||
              this.y + this.imagen.height >=  canvas.height - fg.height){
                console.log("entre");
                golpe.volume = 0.7;
                golpe.play();
                array_scores.push(score);
                size = pipe.length;
                colisionado(size);

        }
        }
  }

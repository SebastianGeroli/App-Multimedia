var Pez = function (x,y){

        this.x = x;
        this.y = y;
        this.imagen = new Image();
        this.imagen.src = "src/images/magikar1.png";
        //Funcion del pez que detecta las colisiones con los pipes y el suelo
        this.collision = function(i){
          if( this.x + this.imagen.width >= pipe[i].x &&
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

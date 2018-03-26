
-------------- F L A P P Y F I S H ----------------

                                           
	                             //100px   // rand(altura[])      /// colores[]
var obstaculo = function(x, y, dy, dx, ancho, altura, color){

	this.x = x;
	this.y = y;
	this.dy = dy;
	this.dx = dx;
	this.ancho = ancho;
	this.altura = altura;
	this.color = color; //array de colores para cambiar el color de los obstaculos
}



var juego = function(colision, pausa, gameover){   

	this.colision =colision;
	this.pausa = pausa;
	this.gameover = gameover;
}

//objeto pez         //100
var pez = function(x_pez, y_pez, dx_pez, dy_pez, counter_pez,
						estado_pez, ancho_pez, alto_pez){
	this.x_pez = x_pez;
	this.y_pez = y_pez;
	this.dx_pez = dx_pez;
	this.dy_pez = dy_pez;
	this.alto_pez = alto_pez;
	this.ancho_pez = ancho_pez;
	this.counter_pez = counter_pez;
	this.estado_pez = estado_pez;


this.draw = function(){
		//contexto.fillStyle = "black";

		/*para que bote*/
		this.counter_pez++ ;
		if(this.counter_pez <=80){ //si ha pasado 1 segundo
			this.y_pez = 298;
		}
		if(this.counter_pez >80){
			this.y_pez = 302
		}

		if(this.counter_pez ===160){
			this.counter_pez = 0;
		}


		/*comprobacion de colisiones pez, con los bordes*/
		if(this.estado_pez === -1){ /*HACIA ARRIBA.*/

			if(this.y_pez <= 0 ){ /*si esta arriba y sigue arriba, se para*/
				this.y_pez = this.y_pez;
			}

			if(this.x_pez > 0 ){ 	/*si esta a la derecha o no ha llegado al tope, que vaya a la izq.*/
				this.y_pez = this.y_pez - this.dy_pez;
			}
		}


		if(this.estado_pez === 1){ /*HACIA abajo.*/

			if(this.y_pez  >= canvas.width - this.ancho_pez){  	/*si esta a la derecha se para*/
				this.y_pez = this.y_pez;
			}

			if(this.y_pez < canvas.width - this.ancho_pez){ 	/*si esta al a izq. y quiere ir a la derecha o no ha llegado al tope izquierdo, que vaya a la derecha*/
				this.y_pez = this.y_pez + this.y_pez;
			}

		}


}

function start_stop(){
  	if(on === 0){
  		on = 1; // encender
  		$("#parapausa").prop('value', 'Pause');
  		$("#info_p1").text("");
  		musica.play();
  	}else{
  		on = 0; // apagar
  		$("#parapausa").prop('value', '  Play  ');
  		$("#info_p1").text("Game Paused. Press S key or Button to continue.");
  		musica.pause();
  	}
}


































































































window.onload = function(){
	//cargamos el elemento canvas
	canvas = document.getElementById("micanvas");

	 if (canvas && canvas.getContext) {
		//una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
		contexto = canvas.getContext("2d");

    


		/*iniciallizar los objetos necesarios*/
		//var jugador = function(x_jugador, y_jugador, dx_jugador, dy_jugador, counter_jugador,  estado_jugador,  ancho_jugador,      alto_torso,  y_cabeza, img_cabeza)
		pez1= new pez( 100,       300,       4,          4,          0,                0,               36,           50,         466,           50,          0,       player_head[0]);

		array_obstaculos = new Array(cantidad_obj);

		myInterval = setInterval(function_go, game_speed);
		myInterval2 = setInterval(crear_objeto, freq);

    var musica= document.getElementById("musica");



		}else{
			alert("ERROR: No es compatible.");
		}
}

function crear_obstaculo(){
	if(on === 1 && transition === 0){
		count++;
		if(pos < cantidad_obj){
			pos++;
			//var bomba = 			function	    (x,     					    y,   dy,  width,  height,   	cond)
			//array_obstaculos[pos] = new obstaculo( , 0,   d_y,    30,    30,      );
				array_obstaculos[pos] =	 array[Math.floor((Math.random()*3)+1)];

		}
	}
}


while(this.juego.pausa!=0 && this.juego.gameover!=0){

	mover_columnas();

	crear_obstaculo();
}
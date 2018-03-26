/*
*** Code EPS Survival Game ***
*/

 /* JUEGO */

/*WARNING NO BORRAR*/

var on = 0; 				/* Para la función start_stop */
var contexto;
var myInterval;
var game_speed = 10; 		/* period of calling in milliseconds */
var pos = -1;
var cantidad_obj = 550; //66 para pruebas!!!!!!!!!!!!!!!!!!!!!!!!
var score = 0;
var count = 0;
var d_y = 3;
var transition = 0;
var nivel = 1;
var freq = 400;
var vidas = 6;

/* Contadores de objetos */
var cont_apuntes = 0;
var cont_bug = 0;
var cont_corazon = 0;
var cont_cuatro_con_9 = 0;
var cont_cafe = 0;
var cont_redbull = 0;

/*carga de vidas*/
myheart = new Image();
myheart.src = 'img/heart_vida.png';

/*carga de cosas malas*/
var bloques_img = new Array();

bloques_img[0] = new Image();
bloques_img[0].src = 'img/apuntes.png';

bloques_img[1] = new Image();
bloques_img[1].src = 'img/bug.png';

bloques_img[2] = new Image();
bloques_img[2].src = 'img/corazon.png';

bloques_img[3] = new Image();
bloques_img[3].src = 'img/4con9.png';

/*carga de cosas buenas*/
var bloques_img2 = new Array();

bloques_img2[0] = new Image();
bloques_img2[0].src = 'img/cafe.png';

bloques_img2[1] = new Image();
bloques_img2[1].src = 'img/red.png';

/* Cabeza jugador */
var player_head = new Array();

player_head[0] = new Image();
player_head[0].src = 'img/emojis/estandar.png';

player_head[1] = new Image();
player_head[1].src = 'img/emojis/sunglasses.png';

player_head[2] = new Image();
player_head[2].src = 'img/emojis/colorado.png';

player_head[3] = new Image();
player_head[3].src = 'img/emojis/asustado.png';

player_head[4] = new Image();
player_head[4].src = 'img/emojis/llanto.png';

var crearImagen = function(src, titulo) {
  var img   = new Image();
  img.src   = src;
  img.alt   = titulo;
  img.titulo = titulo;
  return img;
};

// array de imagnes
var arrayImagenesFondo = [];

// pusheamos las 5 imagenes de fondo  al array
arrayImagenesFondo.push(crearImagen('img/bubble.jpg', 'Bubble'));
arrayImagenesFondo.push(crearImagen('img/b_gorund/biblioteca.jpg', 'Biblioteca'));
arrayImagenesFondo.push(crearImagen('img/b_gorund/pasillo.jpg', 'Pasillo'));
arrayImagenesFondo.push(crearImagen('img/b_gorund/auditorio.jpg', 'Auditorio'));
arrayImagenesFondo.push(crearImagen('img/b_gorund/nevado.jpg', 'nevado'));



/* WARNING NO BORRAR*/

/*BOTONES DE MODO A JUGAR */


window.onload = function(){
	//cargamos el elemento canvas
	canvas = document.getElementById("micanvas");

	 if (canvas && canvas.getContext) {
		//una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
		contexto = canvas.getContext("2d");

    


		/*iniciallizar los objetos necesarios*/
		//var jugador = function(x_jugador, y_jugador, dx_jugador, dy_jugador, counter_jugador,  estado_jugador,  ancho_jugador, y_pierna1,  y_pierna2,     alto_torso,  y_cabeza, img_cabeza)
		jugador1 = new jugador(  445,       416,       4,          4,          0,                0,               36,            466,         466,           50,          0,       player_head[0]);

		array_objetos = new Array(cantidad_obj);

		myInterval = setInterval(function_go, game_speed);
		myInterval2 = setInterval(crear_objeto, freq);

    var musica= document.getElementById("musica");



		}else{
			alert("ERROR: No es compatible.");
		}
}

function crear_objeto(){
	if(on === 1 && transition === 0){
		count++;
		if(pos < cantidad_obj){
			pos++;
			//var bomba = 			function	    (x,     					    y,   dy,  width,  height,   	cond)
			array_objetos[pos] = new bomba(  Math.floor((Math.random() * 870) + 1), 0,   d_y,    ancho,    altura,      Math.floor((Math.random() *(6) +1 )));


		}
	}
}

/*empezar o parar juego*/
function function_go(){
	if(on === 1){
		if(transition === 0){
			musica.volume = 0.15;
			musica.play();
			pintar();
		}
		actualizar_estado();
	}
}



/*actualizar_estado*/
function actualizar_estado(){

	if(vidas === 0){

			var video1 = document.getElementById("myVideo");
			video1.src = "video/video1_simpson.mp4";
			musica.pause();


			var var1 = document.getElementById("button_save");
			var var2 = document.getElementById("button_print");
			var var3 = document.getElementById("parapausa");
			var var4 = document.getElementById("button_reset");

			var1.className = "show_button";
			var2.className = "show_button";
			var3.className = "not_show";
			var4.className = "show_button";


	}
	//if(count === 10|| count === 40 || count === 60 || count === cantidad_obj  ) para pruebas
	if(count === 50  || count ===130  || count ===390  || count === cantidad_obj  ){ /*comprobar que se ha pasado un nivel*/
		transition = 1;
		count ++;
		pintar();

		if(nivel < 5){
			nivel++;

			if(nivel === 2){
				d_y = 4;
			}

			if(nivel === 3){
				/*cambiar el tiempo de llamada de crear_objeto*/
				freq = 150;
				clearInterval(myInterval2);
				myInterval2 = setInterval(crear_objeto, freq );
			}

			if(nivel === 4){
				d_y = 6;
			}

		}




	}


}


 /*pintar()*/
function pintar(){
	if(transition === 0){ 	/*hay transiciones entre niveles porque te has pasado un nivel?? en este caso no*/
		contexto.clearRect(0,0,canvas.width,canvas.height); /*Borrar todo el canvas*/

		/*pintar imagen de fondo NOTA: comentar si se desea*/
		make_background();

		/*pintar el score*/
		contexto.fillStyle = "white";
		contexto.fillRect(665,11, 225, 30);
		contexto.fillRect(735,47, 155, 30);
		contexto.fillRect(735,83, 155, 60);

		contexto.fillStyle = "#7b36a0";
		contexto.font = "bold 30px Courier New";
		contexto.fillText("score=",740,70);

		contexto.fillStyle = "#7b36a0";
		contexto.font = "bold 30px Courier New";
		contexto.fillText(score,850,70);

		/* pintar vidas*/
		contexto.fillStyle = "#7b36a0";
		contexto.font = "bold 15px Courier New";
		contexto.fillText("conv.:" + vidas, 670,30);
		switch(vidas) {
			case 6:
				contexto.drawImage(myheart, 737, 13, 25, 25);
				contexto.drawImage(myheart, 763, 13, 25, 25);
				contexto.drawImage(myheart, 788, 13, 25, 25);
				contexto.drawImage(myheart, 813, 13, 25, 25);
				contexto.drawImage(myheart, 838, 13, 25, 25);
				contexto.drawImage(myheart, 863, 13, 25, 25);
				break;

			case 5:
				contexto.drawImage(myheart, 737, 13, 25, 25);
				contexto.drawImage(myheart, 763, 13, 25, 25);
				contexto.drawImage(myheart, 788, 13, 25, 25);
				contexto.drawImage(myheart, 813, 13, 25, 25);
				contexto.drawImage(myheart, 838, 13, 25, 25);
				break;

			case 4:
				contexto.drawImage(myheart, 737, 13, 25, 25);
				contexto.drawImage(myheart, 763, 13, 25, 25);
				contexto.drawImage(myheart, 788, 13, 25, 25);
				contexto.drawImage(myheart, 813, 13, 25, 25);
				break;

			case 3:
				contexto.drawImage(myheart, 737, 13, 25, 25);
				contexto.drawImage(myheart, 763, 13, 25, 25);
				contexto.drawImage(myheart, 788, 13, 25, 25);
				break;

			case 2:
				contexto.drawImage(myheart, 737, 13, 25, 25);
				contexto.drawImage(myheart, 763, 13, 25, 25);
				break;

			case 1:
				contexto.drawImage(myheart, 737, 13, 25, 25);
			default:
		}

		/*  Score apuntes */
		contexto.drawImage(bloques_img[0], 740, 85, 25, 25);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_apuntes, 742, 130);

		/*  Score cafe */
		contexto.drawImage(bloques_img2[0], 765, 85, 25, 25);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_cafe, 766, 130);

		/*  Score RedBull */
		contexto.drawImage(bloques_img2[1], 787, 85, 25, 25);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_redbull, 792, 130);

		 /*  Score bug */
		contexto.drawImage(bloques_img[1], 813, 85, 25, 25);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_bug, 819, 130);

		/*  Score corazon roto */
		contexto.drawImage(bloques_img[2], 841, 89, 20, 20);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_corazon, 845, 130);

		 /*  Score 4.9 */
		contexto.drawImage(bloques_img[3], 864, 89, 22, 22);
		contexto.fillStyle = "#7b36a0";
		contexto.font = "17px Courier New";
		contexto.fillText(cont_cuatro_con_9, 868, 130);

		/*pintar todos los objetos no nulos*/
		for(i = 0; i < pos; i++ ){
			if(array_objetos[i] !== null)
			array_objetos[i].draw();
		}
	}

	if(transition === 1){

		musica.pause();
		var success = document.getElementById("success");
		success.volume = 0.3;
		success.play();
		contexto.fillStyle = "black";
		contexto.fillRect(0,0,canvas.width,canvas.height);

		/*escribir texto felicitación*/
		setTimeout(escribir,1000); //WARNING: si se reduce mucho este tiempo las comprobaciones de nivel ===2 etc. se alteran
		function escribir(){
			contexto.fillStyle = "#fff";
			contexto.font = "30px Arial";

			if(nivel === 2){
				contexto.fillText("Felicidades! Primer año superado!", 170, 200);
				contexto.fillText("Es tiempo para llamar a los amigos e irse de fiesta...",  170, 230);
			}
			if(nivel === 3){
				contexto.fillText("Segundo curso superado!! ", 170, 200);
				contexto.fillText("¿Pero has usado videotutoriales para aprobar?",  170, 230);
			}
			if(nivel === 4){
				contexto.fillText("Felicidades! Terce año limpio", 170, 200);
				contexto.fillText("Sabes ya lo que es un IF()",  170, 230);
			}
			if(nivel === 5){
				contexto.fillText("FELICIDADES, HAS SOBREVIVIDO Y TE HAS SACADO LA CARRERA", 100, 200);
				contexto.fillText("ES HORA DE QUE TE METAS UN BUEN BOTELLÓN ENTRE PECHO Y ESPALDA",  100, 230);
			}

		}
		setTimeout(show_video,3000);
	}

	if(vidas === 0){
		contexto.fillStyle = "black";
		contexto.fillRect(0,0,canvas.width,canvas.height);
		contexto.fillStyle = "red";
		contexto.font="bold 60px Courier New";
		contexto.fillText("G A M E - O V E R", 150,200);
		var gameover= document.getElementById("gameover");
		gameover.play();

		clearInterval(myInterval);
		clearInterval(myInterval2);
	}
	/*pintar jugador*/
	jugador1.draw();

	/*pintar el suelo*/
	contexto.fillStyle = "#004000";
	contexto.fillRect(0, 486, 900, 20);


}

var show_video = function(){
	/*coge el video y el vanvas*/

	var video1 = document.getElementById("myVideo"); //.addEventListener("ended",myHandler,false);
	var the_canvas = document.getElementById("micanvas");
	var buttonSkip = document.getElementById("button_skip");
	var buttonPause = document.getElementById("parapausa");

	video1.className = "show";
	the_canvas.className = "not_show";
	buttonSkip.className = "show_button";
	parapausa.className = "not_show";


    $("#myVideo").ready(function(){
        video1.play();
    });

	skip_video = function(){
		video1.currentTime = video1.seekable.end(0);
	}


	video1.onended = function(e) {
		 /*despues de acabarse el video, sigue el juego*/
			video1.className = "not_show";
			the_canvas.className = "show";

			/*a negro*/
			contexto.fillStyle = "black";
			contexto.fillRect(0,0,canvas.width,canvas.height);

			/*dejar de mostrar skip_video y volver a enseñar pausa*/
			var buttonSkip = document.getElementById("button_skip");
			var buttonPause = document.getElementById("parapausa");
			buttonSkip.className = "not_show";
			parapausa.className = "show_button";

			/*conforme avanzan los niveles los videos cambian*/
		if(nivel === 2){
			video1.src = "video/video2_calculus.mp4";
			/*vuelta al juego*/
			setTimeout(no_transition,1500);
		}

		if(nivel === 3){
			video1.src = "video/video3_study.mp4";
			/*vuelta al juego*/
			setTimeout(no_transition,1500);
		}

		if(nivel === 4){
			video1.src = "video/video4_antivirus.mp4";
			setTimeout(no_transition,1500);
		}

		if(nivel === 5){
			video1.src = "video/video1_simpson.mp4";
			musica.pause();
			make_background();
			var var1 = document.getElementById("button_save");
			var var2 = document.getElementById("button_print");
			var var3 = document.getElementById("button_reset");
			var var4 = document.getElementById("parapausa");
			var1.className = "show_button";
			var2.className = "show_button";
			var3.className = "show_button";
			var4.className = "not_show";

			/*win_image = new Image();
			win_image.src = 'img/b_gorund/nevado.jpg';
			contexto.drawImage(win_image,0,0,900,600);*/
		}
	};

}




/*para el boton de pause*/
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


function follow_jugador(e) {
    jugador1.x_jugador = e.clientX - 278;

}

function no_transition(){
	transition = 0;
	make_background();
	musica.play();
}

function make_background(){
	contexto.drawImage(arrayImagenesFondo[nivel-1],0,0,900,600);
}



/*objeto muneco*/
var jugador = function(x_jugador, y_jugador, dx_jugador, dy_jugador, counter_jugador,
						estado_jugador, ancho_jugador, y_pierna1, y_pierna2, alto_torso, y_cabeza, img_cabeza){
	this.x_jugador = x_jugador;
	this.y_jugador = y_jugador;
	this.dx_jugador = dx_jugador;
	this.dy_jugador = dy_jugador;
	this.alto_torso = alto_torso;
	this.y_cabeza = this.alto_torso -18;
	this.y_pierna1 = this.y_jugador + this.alto_torso;
	this.y_pierna2 = this.y_jugador + this.alto_torso;
	this.ancho_jugador = ancho_jugador;
	this.counter_jugador = counter_jugador;
	this.estado_jugador = estado_jugador;
	this.img_cabeza = img_cabeza;

	/*dibujar todo el muñeco*/
	this.draw = function(){
		//contexto.fillStyle = "black";

		/*para que bote*/
		this.counter_jugador++ ;
		if(this.counter_jugador <=80){ //si ha pasado 1 segundo
			this.y_jugador = 416;
		}
		if(this.counter_jugador >80){
			this.y_jugador = 419
		}

		if(this.counter_jugador ===160){
			this.counter_jugador = 0;
		}


		/*comprobacion de colisiones jugador, con los bordes*/
		if(this.estado_jugador === -1){ /*HACIA LA IZQ.*/

			if(this.x_jugador <= 0 ){ /*si esta a la izquierda y sigue a la izq, se para*/
				this.x_jugador = this.x_jugador;
			}

			if(this.x_jugador > 0 ){ 	/*si esta a la derecha o no ha llegado al tope, que vaya a la izq.*/
				this.x_jugador = this.x_jugador - this.dx_jugador;
			}
		}


		if(this.estado_jugador === 1){ /*HACIA LA DCHA.*/

			if(this.x_jugador  >= canvas.width - this.ancho_jugador){  	/*si esta a la derecha se para*/
				this.x_jugador = this.x_jugador;
			}

			if(this.x_jugador < canvas.width - this.ancho_jugador){ 	/*si esta al a izq. y quiere ir a la derecha o no ha llegado al tope izquierdo, que vaya a la derecha*/
				this.x_jugador = this.x_jugador + this.dx_jugador;
			}

		}

		/*pintando la pierna 1*/
		contexto.fillStyle = "#1403FA";
		contexto.fillRect(this.x_jugador, this.y_pierna1, 6, 20);

		/*pintando la pierna 2*/
		contexto.fillRect(this.x_jugador+30, this.y_pierna2, 6, 20);

		/*torso del jugador*/
		contexto.fillStyle = "red";
		contexto.fillRect(this.x_jugador, this.y_jugador, this.ancho_jugador, this.alto_torso);

		/*pintando la cabeza*/
		contexto.drawImage(this.img_cabeza, (this.x_jugador -11), (this.y_jugador - (this.ancho_jugador+7)));
		/*contexto.beginPath();
		contexto.arc((this.x_jugador + this.ancho_jugador/2), (this.y_jugador - (this.ancho_jugador/2)), (this.ancho_jugador/2), 0, 2*Math.PI, true);
		contexto.fill();*/

	}
}


/*objeto bomba*/
var bomba = function(x, y, dy, width, height, cond){

	this.x = x;
	this.y = y;
	this.dy = dy;
	this.width = width;
	this.height = height;
	this.cond = cond;



	this.draw = function(){

		//redbull
		if(this.cond === 1){
			contexto.drawImage(bloques_img2[0], this.x, this.y);
		}
		//objeto cafe
		if(this.cond === 2){
			contexto.drawImage(bloques_img2[1], this.x, this.y);
		}
		//objeto apuntes
		if(this.cond === 3){
			contexto.drawImage(bloques_img[0], this.x, this.y);
		}
		//objeto bug
		if(this.cond === 4){
			contexto.drawImage(bloques_img[1], this.x, this.y);
		}
		//objeto corazon roto
		if(this.cond === 5){
			contexto.drawImage(bloques_img[2], this.x, this.y);
		}
		//objeto 4,9
		if(this.cond === 6){
			contexto.drawImage(bloques_img[3], this.x, this.y);
		}


		 //comprobacion colision objeto con jugador
		if(this.y <= canvas.height) {
			if((this.x + this.width) >= jugador1.x_jugador  &&
				(this.x)  <= jugador1.x_jugador + jugador1.ancho_jugador/*/2*/ &&
				(this.y) >= jugador1.y_jugador){

					delete this.y;
					//objeto cafe
					if(this.cond === 1){
						jugador1.dx_jugador = jugador1.dx_jugador +1;
						score = score +1;
						//cargar elemento audio
						var sorbo = document.getElementById("sorbo1");
						sorbo.play();
						/* Aumento contador de redbull */
						++cont_cafe;

						/* Cambio de cara a sunglasses*/
						jugador1.img_cabeza = player_head[1];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
					//objeto redbull
					if(this.cond === 2){
						jugador1.dx_jugador = jugador1.dx_jugador +1;
						score = score +1;
						var sorbo = document.getElementById("sorbo1");
						sorbo.play();
						/* Aumento contador de cafe */
						++cont_redbull;

						/* Cambio de cara a sunglasses */
						jugador1.img_cabeza = player_head[1];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
					//objeto apuntes
					if(this.cond === 3){
						jugador1.dx_jugador = jugador1.dx_jugador +1;
						score = score +1;
						var apuntes = document.getElementById("apuntes");
						apuntes.volume = 0.2;
						apuntes.play();
						/* Aumento contador de apuntes */
						++cont_apuntes;

						/* Cambio de cara a colorado */
						jugador1.img_cabeza = player_head[2];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
					//objeto bug
					if(this.cond === 4){
						if(jugador1.dx_jugador > 1)
						jugador1.dx_jugador = jugador1.dx_jugador -1;
						score = score -1;
						var slap1 = document.getElementById("slap1");
						slap1.play();
						/* Aumento contador de bug */
						++cont_bug;
						vidas = vidas -1;

						/* Cambio de cara a asustado */
						jugador1.img_cabeza = player_head[3];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
					//objeto corazon roto
					if(this.cond === 5){
						if(jugador1.dx_jugador > 1)
						jugador1.dx_jugador = jugador1.dx_jugador -1;
						score = score -1;
						var aww = document.getElementById("aww");
						aww.play();
						/* Aumento contador de corazon roto */
						++cont_corazon;
						vidas = vidas -1;

						/* Cambio de cara a llanto */
						jugador1.img_cabeza = player_head[4];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
					//objeto 4,9
					if(this.cond === 6){
						if(jugador1.dx_jugador > 1)
						jugador1.dx_jugador = jugador1.dx_jugador -1;
						score = score -1;
						var slap2 = document.getElementById("slap2");
						slap2.play();
						/* Aumento contador de 4.9 */
						++cont_cuatro_con_9;
						vidas = vidas -1;

						/* Cambio de cara a asustado */
						jugador1.img_cabeza = player_head[3];
						/* Vuelta a la cara estandar */
						setTimeout(estandar_face, 500, player_head[0]);
					}
			}
		}

		this.y = this.y + this.dy;

  }
}

/* Funcion para cambiar a la cara estandar (en realidad se podría usar para cambiar a cualquier cara) */
function estandar_face(img){
  jugador1.img_cabeza = img;
}


 /*eventos del teclado que mueven al jugador*/

 /*presion de teclas*/
document.addEventListener("keydown", function(event) {

	switch(event.which) {

		case 37:					/*tecla pulsada: LEFT*/
			jugador1.estado_jugador = -1;
			break;

		case 39:					/*tecla pulsada: RIGHT */
			jugador1.estado_jugador = 1;
			break;


		default:

	}

});


/*releas de teclase*/
document.addEventListener("keyup", function(event) {

	switch(event.which) {
		case 37:					/*LEFT soltada*/
			jugador1.estado_jugador = 0;
			break;

		case 39:					/*RIGHT soltada*/
			jugador1.estado_jugador = 0;
			break;

		case 83:					/*tecla soltda: S */
			start_stop();
			break;
		default:

	}

});







//Funciones para el cambio de ventanas
 function change_class_home(){

   var scnd_sec = document.getElementsByClassName("window_pulsed");
   var option = document.getElementsByClassName("option_pulsed");
   scnd_sec[0].className = "window_not_pulsed";
   option[0].className = "option_not_pulsed";

   var inicio_sec = document.getElementById("home");
   var inicio_opt = document.getElementById("option_home");
   inicio_opt.className = "option_pulsed";
   inicio_sec.className = "window_pulsed";

 }

 function change_class_info(){

   var scnd_sec = document.getElementsByClassName("window_pulsed");
   var option = document.getElementsByClassName("option_pulsed");
   scnd_sec[0].className = "window_not_pulsed";
   option[0].className = "option_not_pulsed";

   var noticias_sec = document.getElementById("info");
   var noticias_opt = document.getElementById("option_info");
   noticias_opt.className = "option_pulsed";
   noticias_sec.className = "window_pulsed";

 }

 function change_class_como_jugar(){

   var scnd_sec = document.getElementsByClassName("window_pulsed");
   var option = document.getElementsByClassName("option_pulsed");
   scnd_sec[0].className = "window_not_pulsed";
   option[0].className = "option_not_pulsed";

   var acerca_sec = document.getElementById("como_jugar");
   var acerca_opt = document.getElementById("option_como_jugar");
   acerca_opt.className = "option_pulsed";
   acerca_sec.className = "window_pulsed";

 }

 function change_class_juego() {

   var scnd_sec = document.getElementsByClassName("window_pulsed");
   var option = document.getElementsByClassName("option_pulsed");
   scnd_sec[0].className = "window_not_pulsed";
   option[0].className = "option_not_pulsed";

   var juego_sec = document.getElementById("juego");
   var juego_opt = document.getElementById("option_juego");
   juego_sec.className = "window_pulsed";
   juego_opt.className = "option_pulsed";



 }

  function change_class_encuesta(){ 
 
   var scnd_sec = document.getElementsByClassName("window_pulsed"); 
   var option = document.getElementsByClassName("option_pulsed"); 
   scnd_sec[0].className = "window_not_pulsed"; 
   option[0].className = "option_not_pulsed"; 
 
   var encuesta_sec = document.getElementById("encuesta"); 
   var encuesta_opt = document.getElementById("option_encuesta"); 
   encuesta_opt.className = "option_pulsed"; 
   encuesta_sec.className = "window_pulsed"; 
 
 }


 /*session storage*/
var array_res = [];
var array_res_final = new Array(5);
var cuenta = 0;

function clickSave() {

  if(score >= 0){
      if(typeof(Storage) !== "undefined") {

      	/*store the last result*/
        sessionStorage.setItem("lastResult", score);
        /*var player_name = document.getElementById("insert").value;*/

      	/*guardar en array_res*/
        cuenta++;
      	array_res.push(score);

        var aux;
        /* Ordenamos el array de puntuaciones de mayor a menor */
        for (var i = 0; i < array_res.length-1; i++) {
          for(var j = i+1; j<array_res.length; j++){
            if(array_res[i] < array_res[j]){
              aux = array_res[i];
              array_res[i] = array_res[j];
              array_res[j] = aux;
            }
          }
        }


        /* Mostramos solo las 5 puntuaciones mejores */
        if(cuenta >= array_res_final.length){
          for(var i = 0; i<array_res_final.length; i++){
            array_res_final[i] = array_res[i];
          }
        }

      	/*store the complete list of results*/
        if(cuenta < array_res_final.length){
          sessionStorage.setItem("array de res.", array_res);
        }else{
          sessionStorage.setItem("array de res.", array_res_final);
        }

  	    document.getElementById("info_p1").innerHTML = "Has agregado tu Score a la tabla.";
        if(score === array_res[0] || score === array_res_final[0]){
          document.getElementById("info_p3").innerHTML = "Enhorabuena! Eres la mejor puntuación hasta ahora!";
        }

        } else {
          document.getElementById("info_p1").innerHTML = "ERROR: your browser does not support web storage...";
        }
    }else{
      document.getElementById("info_p1").innerHTML = "ERROR: tu resultado está por debajo de cero";
    }
}

 function printTabla() {
    if(typeof(Storage) !== "undefined") {

  	var lastR = 0;
  	var arrayR = [];

    	/*get the last result*/
      lastR = sessionStorage.getItem("lastResult");
    	document.getElementById("info_p1").innerHTML = "Tu último resultado ha sido: " + lastR;

    	/*get all the results*/
      arrayR = sessionStorage.getItem("array de res.");
    	document.getElementById("info_p2").innerHTML = "Lista de mejores resultados: " + arrayR;

    } else {
        document.getElementById("info_p1").innerHTML = "ERROR: your browser does not support web storage...";
    }
}



function resetear(){
	initial_values();
	back_to_menu();

  document.getElementById("info_p1").innerHTML = "";
  document.getElementById("info_p2").innerHTML = "";
  document.getElementById("info_p3").innerHTML = "";

	var boton = document.getElementById("button_save");
	boton.className = "not_show";
  var anter_res = document.getElementById("button_print");
  anter_res.className = "not_show";
  var reset = document.getElementById("button_reset");
  reset.className = "not_show";
}

/* Funcion para empezar el juego al pulsar el boton JUGAR */
function play_button_to_game(){  //"play as fireman (canvas1)"

	var first_screen = document.getElementsByClassName("before_canvas_show"); /* first_screen: Equivalente a menu en la funcion back_to_menu() */
	var canvas = document.getElementById("micanvas");

	first_screen[0].className = "not_show";
	canvas.className = "show";

	on = 1;
	game_speed = 10;
	freq = 400;
	clearInterval(myInterval);
	myInterval = setInterval(function_go, game_speed);
	clearInterval(myInterval2);
	myInterval2 = setInterval(crear_objeto, freq);

	var var1 = document.getElementById("parapausa");
	var var2 = document.getElementById("button_reset");
	var var3 = document.getElementById("button_save");
	var var4 = document.getElementById("button_print");

	var1.className = "show_button";
	var2.className = "not_show";
	var3.className = "not_show";
	var4.className = "not_show";
}

/* Funcion para volver al menu donde el boton jugar al terminar el juego (nivel = 5) */
function back_to_menu(){
  var menu = document.getElementById("center1");
  var canvas = document.getElementById("micanvas");

  canvas.className = "not_show";
  menu.className = "before_canvas_show";
}

/* PROVISIONAL PORQUE NO FUNCIONARÁ CUANDO PASEMOS TODO POR PARÁMETRO */

/* Funcion para inicializar todos los valores a 0 al llamar la funcion back_to_menu en el nivel = 5*/
function initial_values() {

  on = 0;
  pos = -1;
  score = 0;
  d_y = 3;
  count = 0;
  transition = 0;
  nivel = 1;
  jugador1.dx_jugador = 4;
  vidas = 6;

  /* Contadores de objetos */
  cont_apuntes = 0;
  cont_bug = 0;
  cont_corazon = 0;
  cont_cuatro_con_9 = 0;
  cont_cafe = 0;
  cont_redbull = 0;
}

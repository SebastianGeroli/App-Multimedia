//Inicializacion de los audios
var bubble = new Audio();
var golpe= new Audio();
var scor = new Audio();
var musica_juego= new Audio();
bubble.src = "src/sounds/bubble.wav";
golpe.src = "src/sounds/golpe.mp3";
scor.src = "src/sounds/score.mp3";
musica_juego.src = "src/sounds/musica_juego.mp3";
//Inicializacion de las Imagenes
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
fg.src = "src/images/fg.png";
pipeNorth.src = "src/images/tubo_Superior.png";
pipeSouth.src = "src/images/tubo_Inferior.png";
//Variables Globales del juego
var gap = 150;
var constant;
var ctx;
var pez;
//var gravity = 1;
var score =0;
var gameover = 0;
var pipe = [];
var paraPausa = "";
var size;
var array_scores = [];
var bg = [];
var estrellas = [];
var peces = [];
var subida = 30;
var fpsCounter = Date.now(); //temporizador para restringir el refresco del sprite
fps = 30;

var fallingCounter = Date.now(); //temporizador para caida del pez

//Funcion que mnuestra el fondo en pantalla en base a un source de imagen
var generador_de_fondos = function(source){

	var ref = new Image();
	ref.src = source;
	return ref;

<<<<<<< HEAD
};
=======
}
//Añadir imagenes al array estrellas
estrellas.push(generador_de_fondos("src/images/cropped-seastar2.png"));
estrellas.push(generador_de_fondos("src/images/cropped-seastar3.png"));
estrellas.push(generador_de_fondos("src/images/cropped-seastar4.png"));
>>>>>>> 4c79cbbeb01c90e7385bae2e25f835e9881bf4d4
//Añadir fondos al array background "bg"
bg.push(generador_de_fondos("src/images/fondo-4.png"));  // 0
bg.push(generador_de_fondos("src/images/fondoColor4.png")); // 1
bg.push(generador_de_fondos("src/images/fondoColor5.png"));  // 2
bg.push(generador_de_fondos("src/images/fondo-3.png")); // 3
bg.push(generador_de_fondos("src/images/fondoColor1.png")); // 4
bg.push(generador_de_fondos("src/images/fondo-1.png")); // 5
bg.push(generador_de_fondos("src/images/fondo-2.png")); // 6
bg.push(generador_de_fondos("src/images/fondoColor3.png")); // 7
bg.push(generador_de_fondos("src/images/fondoColor2.png"));  // 8
//Funcion que vuelve a iniciar el juego al incio una vez que se pierde
function reinicializar(){
	pez.x = 10;  //volver donde empezo
	pez.y = 150;
    score = 0;
    paraPausa = "";

    pipe[0] = {
	     x : canvas.width,
	     y : 0,
         paso : 0,
         paso2: 0
	};
	size = 0;  //tamaño del array de obstaculos que se fueron creando vuelve a zero.
	crear_fondo(0);
}
//Al cargarse la pagina completa, inicializa esta funcion
window.onload = function(){

var canvas = document.getElementById("canvas");
        if (canvas && canvas.getContext) {
            //una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
            ctx = canvas.getContext("2d");
            }else{
                alert("ERROR: No es compatible.");
            }
//inicializacion del array pipe
	 pipe[0] = {
	     x : canvas.width,
	     y : 0,
         paso : 0,
         paso2 : 0
         
	};
	//Inicializacion objeto "pez" en las coordenadas 10,150
   pez  =  new Pez(10, 150);

  
}
//Funcion que muestra el boton y el canvas de fondo
function play_button_to_game(){
	var canvas1 = document.getElementById("canvas");
    canvas1.className = "mostrar";

	var boton = document.getElementById("boton");
	boton.className = "no_mostrar";
    draw();
}
//Funcion que busca que tipo de resquestAnimationFrame usa el navegador que usa el usuario y lo utiliza
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();




//Evento que escucha que teclas esta ingresando el usuario, y en base a que tecla es presionada entra a su case
    document.addEventListener("keydown", function(event) {
        switch(event.which) {
            case 90:/*tecla: Z */
                //moveUp();
                pez.salto();
                break;
            case 32:/*tecla: SPACE */
                gravityOnOff();
                break;
			case 83:/*tecla: S */
				startAnimation();
				break;
            default:
        }
    });
//Funcion que crea estrellas en el piso
function drawEstrellas(){
    ctx.drawImage(estrellas[Math.floor(Math.random()*estrellas.length)],Math.floor(Math.random()*901)+1,Math.floor(Math.random()*118)+482);
    
}
//Funcion que cambia el fondo en base al puntaje
		function cambiar_fondo(punt){
		    if(punt == 0){
		        crear_fondo(0);
		    }
		    if(punt == 1){
		        crear_fondo(1);
		    }
		    if(punt== 2){
		        crear_fondo(2);
		    }
		    if(punt== 3){
		        crear_fondo(3);
		    }
		    if(punt > 3){
		        crear_fondo(4);
		    }
		}
//Funcion que para o activa la gravedad, usada mayormente para debug
function gravityOnOff(){
  if (pez.gravedad == 0.1){
    pez.gravedad = 0;
  }else{
    pez.gravedad = 0.1;
  }
}
//Funcion que hace subir al pez y reproduce un sonido al ser llamada.
function moveUp(){
  var total = 0;
  for(total;total<subida;total++){
    pez.y -= 1;
  }
        bubble.play();
        bubble.volume = 0.5;
}
//Funcion que cambia de fondo
function crear_fondo(pos){

    ctx.drawImage(bg[pos],0,0);

}
//Funcion que al haber colisionado borra todo lo que se encuentra en el array pipe y llama al metodo reinicializar
function colisionado(param){
	pipe.splice(0,param); //borramos el array de pipes que se genero con el for
	reinicializar();
}
//Funcion que inicia el juego, o lo pone en pausa
function startAnimation(event){
            if(this.textContent === "Start"){
                requestAnimationFrame(draw);
                this.textContent = 'Pause';
            }
            else{
                cancelAnimationFrame(paraPausa);
                this.textContent = 'Start';
            }
        }
//Funcion encargada de dibujar todo
setTimeout(drawEstrellas,1000);
function draw(){
	     musica_juego.play();
		 cambiar_fondo(score);
       //--------------Generamos tuberias, las metemos en array y su altura la ponemos aleatoria ------
        for(var i = 0; i < pipe.length; i++){
            constant = pipeNorth.height+gap;
            ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
            ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
            pipe[i].x--;    //dibujamos y las movemos hacia la iquierda
            if( pipe[i].x <= 600){  // en el pixel 700 le damos una altura aleatoria y lo metemos en el array
                if(pipe[i].paso=== 0){
                   pipe.push({
                    x : canvas.width,
                    y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height,  //
                    paso : 0,
                    paso2: 0
                }); 
                    pipe[i].paso = 1;
                }
            }
            if(pipe[i].x <= 30 && pipe[i].paso2==0){
                score++;
                scor.play();
                pipe[i].paso2 = 1;

            }
            //Funcion dentro del pez que detecta colisiones
			pez.collision(i);
        }
         // --------------- Generamos el magikarp y el suelo --------
        ctx.drawImage(fg,0,canvas.height - fg.height);   // dibujamos el suelo
<<<<<<< HEAD
       // ctx.drawImage(pez.imagen,pez.x,pez.y);  //dibujamos el pez

        //render player
        ctx.drawImage(pez.imagen, pez.getNextFrame() * pez.width, 0, //inicio de la imagen estatica
        pez.width, pez.height, //final de la imagen estatica
        pez.x, pez.y, //posicion del pez
        pez.width, pez.height); //tamaño de la imagen sprite 

        pez.caida();

        ctx.drawImage(fg,0,canvas.height - fg.height);
        //ctx.drawImage(pez.imagen,pez.x,pez.y);
      //  pez.y += gravity;
=======
        ctx.drawImage(pez.imagen,pez.x,pez.y);  //dibujamos el pez
        pez.y += gravity;
>>>>>>> 4c79cbbeb01c90e7385bae2e25f835e9881bf4d4
        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
        ctx.fillText("Score : "+score,10,canvas.height-20);
        paraPausa = requestAnimationFrame(draw);
    }

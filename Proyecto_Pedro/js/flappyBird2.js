
var gap = 150;
var constant;
var ctx;
var pez;
var gravity = 1;
var score =0;
var gameover = 0;
var pipe = [];
var paraPausa = "";
var size;
var array_scores = [];
var bg = [];





var generador_de_fondos = function(source){

	var ref = new Image();
	ref.src = source;
	return ref;

};

bg.push(generador_de_fondos("src/images/fondo-4.png"));  // [fondo3, fondo4, ... ,]
bg.push(generador_de_fondos("src/images/fondoColor4.png"));

   

    // load images


var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

    //pez.src = "images/pez.png";




fg.src = "src/images/fg.png";
pipeNorth.src = "src/images/tubo_Superior.png";
pipeSouth.src = "src/images/tubo_Inferior.png";




    // audio files

var bubble = new Audio();
var golpe= new Audio();
var scor = new Audio();
var musica_juego= new Audio();
bubble.src = "src/sounds/bubble.wav";
golpe.src = "src/sounds/golpe.mp3";
scor.src = "src/sounds/score.mp3";
musica_juego.src = "src/sounds/musica_juego.mp3";




function reinicializar(){


	pez.x = 10;  //volver donde empezo
	pez.y = 150;
    score = 0;


    paraPausa = "";

    pipe[0] = {
	     x : canvas.width,
	     y : 0
	};

	size = 0;  //tamaño del array de obstaculos que se fueron creando vuelve a zero.

	
	crear_fondo(0);



}



window.onload = function(){




	var canvas = document.getElementById("canvas");

        if (canvas && canvas.getContext) {
            //una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
            ctx = canvas.getContext("2d");

            }else{
                alert("ERROR: No es compatible.");
            }


	 pipe[0] = {
	     x : canvas.width,
	     y : 0
	};

	pez  =  new Pez(10, 150);




}

function play_button_to_game(){



	var canvas1 = document.getElementById("canvas");
    canvas1.className = "mostrar";


	
	var boton = document.getElementById("boton"); 
	boton.className = "no_mostrar";
    
   
    draw();




}

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();







    // on key down

    document.addEventListener("keydown", function(event) {

        switch(event.which) {
            case 90:
                moveUp();
                break;
            case 32:
                gravityOnOff();
                break;
            default:
        }
    });

    document.addEventListener("keyup", function(event) {

        switch(event.which) {
             case 83:                    /*tecla soltda: S */
                startAnimation();
                break;
            default:

        }

    });





    /*window.onload = function(){
        //cargamos el elemento canvas
        var canvas = document.getElementById("canvas");

         if (canvas && canvas.getContext) {
            //una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
            ctx = canvas.getContext("2d");
            draw();

            }else{
                alert("ERROR: No es compatible.");
            }
    }

    /*document.addEventListener("keydown",moveUp); */


function gravityOnOff(){
  if (gravity == 1){
    gravity = 0;
  }else{
    gravity = 1;
  }
}


function moveUp(){
  var total = 0;
  for(total;total<30;total++){
    pez.y -= 1;
  }
        bubble.play();
        bubble.volume = 0.5;
}


    // pipe coordinat
    // draw images

function crear_fondo(pos){

    ctx.drawImage(bg[pos],0,0);

}
/*
function cambiar_fondo(){
    if(score == 0){
        crear_fondo(0);
    }

    if(score == 2){
        crear_fondo(1);
    }


}*/

function colisionado(param){


	pipe.splice(0,param); //borramos el array de pipes que se genero con el for


	//cancelAnimationFrame(cancelMe);
	reinicializar();


}


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

//var boton_pausa = document.getElementById("boton_pausa");
//boton_pausa.addEventListener('click', pausar_reanudar, false);


function draw(){




	   musica_juego.play();
       crear_fondo(0);
       
     
    


        
       //--------------Generamos tuberias, las metemos en array y su altura la ponemos aleatoria ------
    


        for(var i = 0; i < pipe.length; i++){

            constant = pipeNorth.height+gap;
            ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
            ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

            pipe[i].x--;    //dibujamos y las movemos hacia la iquierda

            if( pipe[i].x == 600){  // en el pixel 700 le damos una altura aleatoria y lo metemos en el array
                pipe.push({
                    x : canvas.width,
                    y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height  //
                });
            }

            if(pipe[i].x == 30){
                score++;
                scor.play();
            }
            
            


            // detect collision

            if( pez.x + pez.imagen.width >= pipe[i].x && pez.x <= pipe[i].x + pipeNorth.width && (pez.y <= pipe[i].y + pipeNorth.height || pez.y+pez.imagen.height >= pipe[i].y+constant) || pez.y + pez.imagen.height >=  canvas.height - fg.height){
                golpe.volume = 0.7;
                golpe.play();
                array_scores.push(score);
                size = pipe.length;
               	colisionado(size);



          }







        }

         // --------------- Generamos el magikarp y el suele --------


        ctx.drawImage(fg,0,canvas.height - fg.height);   // dibujamos el suelo
        
        ctx.drawImage(pez.imagen,pez.x,pez.y);  //dibujamos el pez
        

        ctx.drawImage(fg,0,canvas.height - fg.height);

        ctx.drawImage(pez.imagen,pez.x,pez.y);


        pez.y += gravity;

        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
        ctx.fillText("Score : "+score,10,canvas.height-20);

        paraPausa = requestAnimationFrame(draw);


    }











    /*function nextImage(element)
    {
        var img = document.getElementById(element);

        for(var i = 0; i < imgArray.length;i++)
        {
            if(imgArray[i].src == img.src) // << check this
            {
                if(i === imgArray.length){
                    document.getElementById(element).src = imgArray[0].src;
                    break;
                }
                document.getElementById(element).src = imgArray[i+1].src;
                break;
            }
        }
    }
    */

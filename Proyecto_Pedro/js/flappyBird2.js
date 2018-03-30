
var gap = 150;
var constant;
var ctx;
var competidor;
var gravity = 1;
var score =0;
var gameover = 0;
var pipe = [];
var paraPausa = "";
var size;
var array_scores = [];


var pez = function (x,y){

        this.x = x;
        this.y = y;
        this.imagen = new Image();
        this.imagen.src = "src/images/magikar1.png";

}

   

    // load images

    //var competidor = new Image(); //suelo_y_fondo()
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

    //competidor.src = "images/competidor.png";
bg.src = "src/images/fondo3.png";
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


	competidor.x = 30;
	competidor.y = 150;
	gameover = 0;
    score = 0;


    paraPausa = "";

    pipe[0] = {
	     x : canvas.width,
	     y : 0
	};
	
	size = 0;
	

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

	competidor  =  new pez(30, 150);



   
}

function play_button_to_game(){

	
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

            default:
        }
    });

    document.addEventListener("keyup", function(event) {

        switch(event.which) {
             case 83:                    /*tecla soltda: S */
                start_stop();
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




function moveUp(){

        competidor.y -= 25;
        bubble.play();
        bubble.volume = 0.5;
} 


    // pipe coordinat
    // draw images

function crear_fondo(){

    ctx.drawImage(bg,0,0);

}

function colisionado(param){


	pipe.splice(0,param); //borramos el array de pipes que se genero con el for

	
	//cancelAnimationFrame(cancelMe);
	reinicializar();
	

}

function cambiarFondo(){


}

function pausar_reanudar(event){
    if(this.textContent === "Pausa"){
        window.cancelAnimationFrame(paraPausa)
        this.textContent = 'Reanudar';

    }
    else{
        window.requestAnimationFrame(draw);
        this.textContent = 'Pausa';

    }

}
var boton_pausa = document.getElementById("boton_pausa");
boton_pausa.addEventListener('click', pausar_reanudar, false);


function draw(){


	  musica_juego.play();


        
      crear_fondo();
      
        for(var i = 0; i < pipe.length; i++){
            
            constant = pipeNorth.height+gap;
            ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
            ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
                 
            pipe[i].x--;    //dibujamos y las movemos hacia la iquierda
            
            if( pipe[i].x == 700){  // en el pixel 700 le damos una altura aleatoria y lo metemos en el array
                pipe.push({
                    x : canvas.width,
                    y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height  //
                }); 
            }

            if(pipe[i].x == 30){
                score++;
                scor.play();
                if(score == 3){


                }
            }


            // detect collision
            
            if( competidor.x + competidor.imagen.width >= pipe[i].x && competidor.x <= pipe[i].x + pipeNorth.width && (competidor.y <= pipe[i].y + pipeNorth.height || competidor.y+competidor.imagen.height >= pipe[i].y+constant) || competidor.y + competidor.imagen.height >=  canvas.height - fg.height){
                golpe.volume = 0.7;
                golpe.play();
                array_scores.push(score);
                size = pipe.length;
               	colisionado(size);
                
                

                /*location.reload(); */// reload the page
          }
            
           
                    

                
            
            
        }



        ctx.drawImage(fg,0,canvas.height - fg.height);
        
        ctx.drawImage(competidor.imagen,competidor.x,competidor.y);
        
        competidor.y += gravity;
        
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






















var gap = 150;
var constant;
var gravity = 1.3;
var score = 0;
var ctx;
var pez;
// audio files
var bubble = new Audio();
var golpe= new Audio();
var scor = new Audio();
var musica_juego= new Audio();
bubble.src = "src/sounds/bubble.wav";
golpe.src = "src/sounds/golpe.mp3";
scor.src = "src/sounds/score.mp3";
musica_juego.src = "src/sounds/musica_juego.mp3";


window.onload = function(){
    var canvas = document.getElementById("canvas");

         if (canvas && canvas.getContext) {
            //una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
            ctx = canvas.getContext("2d");
            }else{
                alert("ERROR: No es compatible.");
            }
}

function play_button_to_game(){

    musica_juego.play();

    var boton = document.getElementById("boton");
    boton.className = "no_mostrar";
    pez  =  new Pez(10, 150);

    draw();

}



    // load images

    //var pez = new Image(); //suelo_y_fondo()
    var bg = new Image();
    var fg = new Image();
    var pipeNorth = new Image();
    var pipeSouth = new Image();

    //pez.src = "images/pez.png";
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



    // on key down

    document.addEventListener("keydown", function(event) {

        switch(event.which) {
            case 38:
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
var pipe = [];

 pipe[0] = {
     x : canvas.width,
     y : 0
};

function moveUp(){

        pez.y -= 25;
        bubble.play();
        bubble.volume = 0.5;
}

function crear_fondo(){

        ctx.drawImage(bg,0,0);

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

function draw(){



        crear_fondo();


        for(var i = 0; i < pipe.length; i++){

            constant = pipeNorth.height+gap;
            ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
            ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

            pipe[i].x--;

            if( pipe[i].x == 700){
                pipe.push({
                    x : canvas.width,
                    y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
                });
            }

            // detect collision


            if( pez.x + pez.imagen.width >= pipe[i].x && pez.x <= pipe[i].x + pipeNorth.width && (pez.y <= pipe[i].y + pipeNorth.height || pez.y+pez.imagen.height >= pipe[i].y+constant) || pez.y + pez.imagen.height >=  canvas.height - fg.height){
                golpe.play();
                location.reload(); // reload the page
            }

            if(pipe[i].x == 5){
                score++;
                scor.play();
                if(score == 3){


                }
            }


        }

        ctx.drawImage(fg,0,canvas.height - fg.height);

        ctx.drawImage(pez.imagen,pez.x,pez.y);

        pez.y += gravity;

        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
        ctx.fillText("Score : "+score,10,canvas.height-20);

        requestAnimationFrame(draw);

}


var ctx;

var pez = function (x,y){

    this.x = x;
    this.y = y;
    this.imagen = new Image();
    this.imagen.src = "images/bird.png";

}

var competidor =  new pez(10, 150);

// load images



//var competidor = new Image(); //suelo_y_fondo()
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

//competidor.src = "images/competidor.png";
bg.src = "src/images/fondo3.png";
fg.src = "src/images/fg.png";
pipeNorth.src = "src/images/pipeNorth.png";
pipeSouth.src = "src/images/pipeSouth.png";


// some variables

var gap = 85;
var constant;

//var competidor.x = 10;
//var competidor.y = 150;

var gravity = 1.3;

var score = 0;

// audio files

var bubble = new Audio();
var golpe= new Audio();
var scor = new Audio();
var musica_juego= new Audio();
bubble.src = "src/sounds/bubble.wav";
golpe.src = "src/sounds/golpe.mp3"
scor.src = "src/sounds/score.mp3";
musica_juego.src = "src/sounds/musica_juego.mp3";

musica_juego.play();

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




window.onload = function(){
    //cargamos el elemento canvas
    var canvas = document.getElementById("canvas");

     if (canvas && canvas.getContext) {
        //una vez cargado el elemento, le digo en que contexto trabajaremos, en este caso 2d
        ctx = canvas.getContext("2d");

        }else{
            alert("ERROR: No es compatible.");
        }
}

/*document.addEventListener("keydown",moveUp); */


var pipe = [];

pipe[0] = {
    x : canvas.width,
    y : 0
};

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


function play_button_to_game(){

draw();

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
        
        if( competidor.x + competidor.imagen.width >= pipe[i].x && competidor.x <= pipe[i].x + pipeNorth.width && (competidor.y <= pipe[i].y + pipeNorth.height || competidor.y+competidor.imagen.height >= pipe[i].y+constant) || competidor.y + competidor.imagen.height >=  canvas.height - fg.height){
            golpe.play();
            location.reload(); // reload the page
        }
        
        if(pipe[i].x == 5){
            score++;
            scor.play();
            if(score == 3){
                musica_juego.pause();

            }
        }
        
        
    }

    ctx.drawImage(fg,0,canvas.height - fg.height);
    
    ctx.drawImage(competidor.imagen,competidor.x,competidor.y);
    
    competidor.y += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,canvas.height-20);
    
    requestAnimationFrame(draw);
    
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



















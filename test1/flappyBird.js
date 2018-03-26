
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


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
bg.src = "images/fondo3.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// some variables

var gap = 85;
var constant;

//var competidor.x = 10;
//var competidor.y = 150;

var gravity = 1.5;

var score = 0;

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){

    competidor.y -= 25;
    fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : canvas.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 700 ){
            pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision
        
        if( competidor.x + competidor.imagen.width >= pipe[i].x && competidor.x <= pipe[i].x + pipeNorth.width && (competidor.y <= pipe[i].y + pipeNorth.height || competidor.y+competidor.imagen.height >= pipe[i].y+constant) || competidor.y + competidor.imagen.height >=  canvas.height - fg.height){
            location.reload(); // reload the page
        }
        
        if(pipe[i].x == 5){
            score++;
            scor.play();
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

draw();


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



















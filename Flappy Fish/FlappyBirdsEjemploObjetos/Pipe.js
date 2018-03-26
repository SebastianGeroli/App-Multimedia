//Array que va a contener los obstaculos
var pipes = [];
var imagenes = [];
imagenes[0] = new Image();
imagenes[0].src = '\Assets\Images\imagen1.png';
imagenes[1] = new Image();
imagenes[1].src = '\Assets\Images\imagen2.png';
imagenes[2] = new Image();
imagenes[2].src = '\Assets\Images\imagen3.png';
//Variable que mete los obstaculos en un array
function newPipe(nombre){
	nombre = new Pipe();
	pipes.push(nombre);
}
//Clase pipe que crea los obstaculos
var Pipe = function(){
	this.type = Math.floor(Math.random() * 2);//instancia un numero random entre 0 y 2
	this.posX = 950;//posX en la que se crea por primera vez el objeto antes de ser trabajado
	this.posY = 0;//posY en la que se mantiene el objeto durante todo su ciclo de vida
}
//Funcion que mueve todos los osbtaculos 5 pixeles cada vez que es invocado
function actualizarObstaculos(){	
	for (var i = 0; i < pipes.lenght; i++) {
		pipes[i].posX = posX -5;
	}
}

//Funcion que verifica que tipo de obstaculo es y en base a eso verifica si hay colision
//Se le debe pasar la posicion Y del objeto PEZ y el TIPO de obstaculo que es que varia entre 0 y 2 (randoms)
function hit (fish_posY,pipe_type){ 
			switch case(pipe_type){
				case 0:
					if(fish_posY<=200||fish_posY>=351){
						 return 1;	
					}else{
						 return 0;	
					}
					break;
				case 1:
					if(fish_posY<=100||fish_posY>=251){
						 return 1;	
					}else{
						 return 0;	
					}
					break;
				case 2:

					if(fish_posY<=300||fish_posY>=451){
						 return 1;	
					}else{
						 return 0;	
					}
					break;
			}
	}
//Suma un punto si pasa correctamente por el obstaculo sin colisionar
//Se le pasa el return de la funcion HIT, y el valor actual del SCORE	
function scoreSuma(a,b){
		if (a == 1) {
			b = b+1; 
		}else{
			b = b;
		}
	}
//Borra el canvas
//Se le deben pasar los parametros de ANCHURA y ALTURA del canvas	
function erraseCanvas(canvasWidht,canvasHeight) {
        context.clearRect(0,0,canvasWidht,canvasHeight);
    }
//Redibuja todo
function drawScreen () {
        erraseCanvas();
    }
//Clase que controla todo lo que pasa en el juego
//Se le deben pasar como parametros los objetos PEZ y PIPE    
	var	GameController = function(fish,pipe){
		this.fish = fish;
		this.pipe = pipe;
		this.score = 0;
		this.sumarScore = scoreSuma;
		this.golpe = hit;
		this.borrar = erraseCanvas;
		this.dibujar = drawScreen;
	}

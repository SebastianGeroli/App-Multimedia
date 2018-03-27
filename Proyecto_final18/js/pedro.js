	
    var n_encuesta = 0;
    var nota_guardar = new Array();
    var jugabilidad_guardar = new Array();
    var recomendar_guardar = new Array();
    var visual_guardar = new Array();
    var recomendar_guardar = new Array();


   


    function validar(){
    var valido = 0;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var cond = document.getElementById("condiciones");

    if(nombre == ""){
        alert("Nombre no válido.");
        return false;
    }else

    if(isNaN(edad) || edad < 1 || edad > 100) {
        alert("Edad no válida.");
        return false;        
    }else

    if(!cond.checked){
        alert("condiciones no aceptadas.");
        return false;
    }else{
        alert("Gracias "+ nombre +" por participar.")
        valido=1;
    }

if(valido=0){

}else{

    var nota = document.getElementsByName("nota");
    var diversion = document.getElementsByName("diversion");
    var jugabilidad = document.getElementsByName("jugabilidad");
    var visual = document.getElementsByName("visual");
    var recomendar = document.getElementsByName("recomendar");

    for(var i=0; i<nota.length; i++) {
        if(nota[i].checked){
            nota_guardar[n_encuesta] = nota[i].value;
        }
  
    }
    
    for(var i=0; i<diversion.length; i++) {
        if(diversion[i].checked){
            diversion_guardar[n_encuesta] = diversion[i].value;
        }
  
    }
    
    for(var i=0; i<jugabilidad.length; i++) {
        if(jugabilidad[i].checked){
            jugabilidad_guardar[n_encuesta] = jugabilidad[i].value;   
        }
  
    }
 
    for(var i=0; i<visual.length; i++) {
        if(visual[i].checked){
            visual_guardar[n_encuesta] = visual[i].value;
        }
  
    }
 
    for(var i=0; i<recomendar.length; i++) {
        if(recomendar[i].checked){
            recomendar_guardar[n_encuesta] = recomendar[i].value;
        }
  
    }
    alert(nombre+edad+nota_guardar[n_encuesta])
    n_encuesta++;
    return true;
}
 
}



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

 function change_class_opiniones() {

   var scnd_sec = document.getElementsByClassName("window_pulsed");
   var option = document.getElementsByClassName("option_pulsed");
   scnd_sec[0].className = "window_not_pulsed";
   option[0].className = "option_not_pulsed";

   var juego_sec = document.getElementById("opiniones");
   var juego_opt = document.getElementById("option_opiniones");
   juego_sec.className = "window_pulsed";
   juego_opt.className = "option_pulsed";

 }


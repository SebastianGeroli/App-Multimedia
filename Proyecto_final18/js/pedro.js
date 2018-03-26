	

    var r_diversion;
    var r_jugabilidad;
    var r_recomendar;

   


    function validar(){
 
 
    if (document.getElementsByClassName("nombre")==("")){
        alert("Debe introducir un nombre.");
        var nombre=document.getElementsByClassName("nombre");
        nombre.focus();
        return false;
    }
    if (document.getElementsByClassName("edad")==("")){
        alert("Debe introducir una edad.");
        var edad=document.getElementsByClassName("edad");
        edad.focus();
        return false;
    }

    if (!document.getElementsByClassName("condiciones").checked){
        alert("Debes aceptar las condiciones.");
        return false;
    }


    //Guardar variables de la encuesta
    r_jugabilidad=capturar(jugabilidad);
    r_diversion=capturar(diversion);   
    r_recomendar=capturar(recomendar);

    alert("TODO BIEN "+r_jugabilidad+" "+r_diversion+" "+r_recomendar);
    return true;
 
}

function capturar(encuesta){

    this.encuesta=encuesta;

        var resultado="ninguno";
 
        var porNombre=document.getElementsByName(encuesta);
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                resultado=porNombre[i].value;
        }
        return resultado;

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


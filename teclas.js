// crear un objeto con variables por dentro
var teclas = {
    UP=38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
    };
    //
    // todo lo anterior es una sola linea de codigo que se desplego para ver mejor. Buena Practica
    
    // LA CONTANTES son un tipo de variable q se escriben con mayuscula. Buena Practica
    
    document.addEventListener("keyup", dibujarTecado);
    
function dibujarTeclado
{
    
    if (evento.keyCode == teclas.UP)
    {
    console.log("tecla oprimida");
    }
    
    switch(evento.keyCode)
    {
     case teclas.UP:
     console.log("arriba");
     
     break;
     
     case teclas.DOWN:
     console.log("abajo");
     break;
     
     default:
     console.log("OTRA tecla");
     break;
     
    }
    
    
    // el otro archivo
}
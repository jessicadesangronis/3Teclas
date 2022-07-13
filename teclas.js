// crear un objeto con variables por dentro
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
    };
    // todo lo anterior es una sola linea de codigo que se desplego para ver mejor. Buena Practica
    
    // Las CONTANTES son un tipo de variable q se escriben con mayuscula. Buena Practica
    
    //console.log(teclas);
    document.addEventListener("keyup", dibujarTeclado);
    var cuadrito = document.getElementById("area_de_dibujo");
    var papel = cuadrito.getContext("2d");
    var x = 150;
    var y = 150;
    
    dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
    
    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, papel)
    {
      papel.beginPath();
      papel.strokeStyle = color;
      papel.lineWidth = 3;
      papel.moveTo(xinicial, yinicial);
      papel.lineTo(xfinal, yfinal);
      papel.stroke();
      papel.closePath();
    }
    
    function dibujarTeclado(evento)
    {
    var colorcito = "#FAA";
    var movimiento = 5;
      switch(evento.keyCode)
      {
        case teclas.UP:
           dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
           y = y - movimiento;
           console.log("arriba");
        break;
        case teclas.DOWN:
           dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
           y = y + movimiento;
           console.log("abajo");
        break;
        case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
            console.log("izquierda");
        break;
        case teclas.RIGHT:
              dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
         x = x + movimiento;
              console.log("derecha");
        break;
        default:
            console.log("otra tecla");
        break;
      }
    }
    
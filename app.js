$(window).on('scroll',function(){
  //efecto1
  var scrolled = $(this).scrollTop();
  $('.efecto1').css({
    'transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)',
    'opacity':1 - scrolled / 400
  });

  //efecto2
  var descubrir = document.getElementById('descubrir');
  d = descubrir.getBoundingClientRect().top - 300;
  $('.efecto2').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });

  //efecto3
  var surfing = document.getElementById('surfing');
  d = surfing.getBoundingClientRect().top - 300;
  $('.efecto3').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - (-d) / 900
  });

  //efecto4
  var esahora = document.getElementById('esahora');
  d = esahora.getBoundingClientRect().top - 100;
  $('.efecto4').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - d / 900
  });



})

//
//Este es un código de JavaScript que utiliza la biblioteca jQuery para crear varios efectos visuales en respuesta al evento de desplazamiento (scroll) de la ventana del navegador. Aquí te explico cada parte:

//$(window).on('scroll',function(){...}): Este es un controlador de eventos que se activa cada vez que el usuario se desplaza en la ventana del navegador.

//var scrolled = $(this).scrollTop();: Esta línea obtiene la posición actual de desplazamiento vertical de la ventana del navegador.

//$('.efecto1').css({...}): Esta línea selecciona todos los elementos con la clase efecto1 y cambia su estilo CSS. El efecto resultante es que estos elementos se moverán hacia abajo a medida que te desplazas hacia abajo en la página ('transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)'), y su opacidad disminuirá a medida que te desplazas hacia abajo ('opacity':1 - scrolled / 400).

//var descubrir = document.getElementById('descubrir');: Esta línea obtiene una referencia al elemento con el id descubrir.

//d = descubrir.getBoundingClientRect().top - 300;: Esta línea calcula la distancia desde la parte superior del elemento descubrir hasta la parte superior de la ventana del navegador, y luego resta 300.

//$('.efecto2').css({...}): Esta línea selecciona todos los elementos con la clase efecto2 y cambia su estilo CSS de manera similar al efecto1, pero en este caso, los elementos se moverán hacia arriba a medida que el elemento descubrir se acerque a la parte superior de la ventana del navegador.

//Los bloques de código para efecto3 y efecto4 funcionan de manera similar a efecto2, pero con diferentes elementos de referencia (surfing y esahora respectivamente) y diferentes factores de transformación y opacidad.//


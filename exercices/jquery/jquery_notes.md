Notes: [https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/11-browser-environment](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/11-browser-environment)

Bootstrap 3 Snippets

JavaScript aplicado en el navegador web.
`window.location.href` url que tiene el usuario cargado

DOM: Document Object Model
Representación del HTML en forma de modelos y propiedades.
Información relacionada con el documento.

BOM: Browser Object Model
Información relacionada con el navegador.

El objeto window contiene todos los objetos relacionados con el navegador.
Todas la variables globales son propiedades el objeto global window, para declarar una variable global, es buena práctica declararla de este modo:
`var window.myValue = 27`
`console.log(window.myValue)`

window.navigator - Toda la información acerca del navegador utilizado
window.location - Información acerca los enlaces de la página (url del usuario)
window.history - Información acerca el historial
window.screen - Información acerca la resolucion de la pantalla del usuario
window.open - Pop-Ups (pestaña nueva)
window.document - Representa todos los metodos y todas las propiedades con las que se puede interactuar con el HTML.

El DOM es una manera de representar el HTML como un árbol de nodos.
El jQuery es una librería para hacer las operaciones del DOM, de manera más fácil y con menos código.

##jQuery

Seleccionar elementos con jQuery: 
`$('ul > li:first-child') === jQuery['ul > li:first-child']`
[http://learn.jquery.com/using-jquery-core/selecting-elements/](http://learn.jquery.com/using-jquery-core/selecting-elements/)

Refinar la seleccion:
```
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );              // the sixth
```

Otros métodos:
`$('h1').html("another <strong>title</strong>")` - Modifica el texto de los h1's
`$('h1').text()` - Devuelve el texto virgen (sin tags)
`$('a').attr('href', 'google.com')` - Modifica el valor del atributo
`$('input').val("input value")` - Modifica o accede (si no hay nada en val) el valor del input

Insertar elementos en otro sitio
```
// Moving elements using different approaches.
 
// Make the first list item the last list item:
var li = $( "#myList li:first" ).appendTo( "#myList" );
 
// Another approach to the same problem:
$( "#myList" ).append( $( "#myList li:first" ) );

// Clone and move
$( "#myList li:first" ).clone().appendTo( "#myList" );
```

De forma nativa:
`document.getElementById('id-name')`
`document.getElementsByClassName('class-name')`
`document.querySelector('#id-name')`







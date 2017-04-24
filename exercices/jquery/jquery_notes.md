Notes: [https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/11-browser-environment](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/11-browser-environment)

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




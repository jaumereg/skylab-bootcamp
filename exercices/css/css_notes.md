### CSS (Cascading Style Sheets)
Capa de presentación / Diseño

Se sobreescriben los datos (prevalece el que esté escrito más abajo) o se van sumando las diferentes propiedades.

El CSS se compone de un selector "p" y una regla {}
Ej. p {color: red;} (selector: p , propiedad: color, valor: red)

####Propiedades

####Tipos de selectores
div
class
id

####Añadir estilos CSS
1. Inline: ```<p style="color: red">```
2. Tag style al principio:
```
<head>
  <style type="text/css">
    p { color: red; }
  </style>
</head>
```
3. Archivo aparte: Se crea un archivo .css
```
<head>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

####Selectores comunes
- Por tipo: p {color: red; }
- Por clase: .lead(nombre de la clase) { color: blue; } **Están pensadas para ser compartidas** *<p class="lead important first">Text</p> Enumeración de clases*
- Por id: #description(nombre del id) { color: green; } **El id debería ser único**
- 
####Selectores (otros)
- Por los hijos (Descendant selector): Entre divs. 
```section p { color: red; }```
```.first p { color: blue; }```
```section strong { background: red; color: white; }``` 
    * Por seccion: 
    ```
    <section>
      <p>This is a <strong>text</strong></p>
    </section>
    ```
    * Por clase: 
    ```
    .lead strong { color: black; }
    ```
    * Por span: 
    ```
    .relevant-block span { color: yellow; }
    ```
- Direct child selector: hijos directos
```
section > p { color: brown; }
```
- General sibling selector
- Adjacent sibling selector
- Attribute present selector
- Attribute value selector
- Attribute partial selector (contains a certain word)

####Preferencias
- Por cascada
- Por especificidad

####Atributos
Href: Enlace
Target: Abrir en ventana nueva o en la misma. (target="_blank")

####Estados
- Para los enlaces
    + a:hover {...} (cuando pase el puntero por encima)
    + a:visited {...} (cuando el usuario ya ha visitado el enlace)
    + a:focus {...} 
- Para los inputs
    + input: enabled
    + input: checked
    + ...
- Por posiciones
    + li:first-child {...}
    + li:last-child {...}
    + div:only-child {...}
- Por tipo
    + img:only-of-type {...}
    + p:first-of-type {...}
- Nth-child [nth-test.com]()
    + li:nth-child(2n, 3n, 4n, ...) {...}
    + li:nth-child(8) {...}
    + li:nth-child(n+6) {...} (a partir del 6)
    + li:nth-child(-n+8) {...} (los 8 ultimos)
    + 

div - Todos los div's
div.first - Todos los div's con clase first
div .first - Todos los hijos de div's que tengan la clase first
.first p - Todos los párrafos que sean hijos de la clase first
.first > p - Los párrafos que son hijos directos de la clase first
p.first - Todos los párrafos con clase first
p.first, p.second - Todos los párrafos con la clase first y second
* - Todos los elementos
.important * - Todos los hijos de la clase important
.important > * - Todos los hijos directos de la clase important
p[target] - Todos los párrafos que tengan el atributo target
.mylist li:first-child - El primer li hijo de la clase mylist
.mylist :first-child - El primer hijo de la clase mylist
.mylist:first-child - El primer hijo con la clase mylist

####Especificidad
Cuanto más específico sea, más preferencia tiene.
*inline > #id > .class > type*

####Definiciones
[https://skylabcoders.github.io/bootcamp-abril2017/?full#83](https://skylabcoders.github.io/bootcamp-abril2017/?full#83) CSS Shorthand

####Elemento de bloque vs Elemento de linea
Elemento de bloque: Intentan ocupar el 100% de la pantalla
Elemento de linea: Ocupan el espacio de su contenido

Elemento de bloque: Saltan de linea
Elemento de linea: Van en línea

Elemento de bloque: Se pueden cambiar las dimensiones
Elemento de linea: El tamaño viene dado por su contenido (no se puede cambiar)

####Box-sizing
border
box-sizing=border-box (respeta dimensiones de la caja)

####Display
display: block (convierte en elemento de bloque)
display: inline (convierte en elemento de linea)
display: inline-block (convierte en híbrido, se pueden colocar en linea y ajustar su tamaño)
float: right/left (flota al lado indicado, el texto puede ir a su lado)
clear: left/right/**both** (devuelve el natural float)


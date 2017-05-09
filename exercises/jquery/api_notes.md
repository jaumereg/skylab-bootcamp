###API's

##JSON
Es un formato para intercambio de datos basado en la notación literal de JavaScript.

JSON.stringify() - Convierte el objeto JavaScript a string JSON
JSON.parse() - Convierte la string JSON a objeto JavaScript

##AJAX
Asynchronous JavaScript + XML
Para acceder al método AJAX:
```
$.ajax({
    url: 'ajax/test.html',
    success: function(data) {
        $('.result').html(data);
        alert('Load was performed.');
    }
});
```
Para ejecutar un servidor http local en CMDER:
`npm install http-server -g`
En CMDER nos situamos en la carpeta contenedora del archivo e inicializamos el server:
`http-server`

##API
Application Programming Interface

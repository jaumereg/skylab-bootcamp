// SS4 MINIPROJECT
// PASAPALABRA
// Jaume Regas

var pasapalabra = [
  {letter: "A", question: "Empieza por A, sinonimo de bestia", answer: "animal", tried: false},
  {letter: "B", question: "Empieza por B, ciudad condal", answer: "barcelona", tried: false},
  {letter: "C", question: "Empieza por C, conjunto de sustancias alimenticias que se consumen a diario", answer: "comida", tried: false},
  {letter: "D", question: "Empieza por D, forman parte de nuestra boca (plural)", answer: "dientes", tried: false},
    {letter: "E", question: "Empieza por E, el mayor de los animales terrestres", answer: "elefante", tried: false},
  {letter: "F", question: "Empieza por F, en el poker, jugada falsa para desorientar o atemorizar al rival", answer: "farol", tried: false},
  {letter: "G", question: "Empieza por G, instrumento musical de cuerda", answer: "guitarra", tried: false},
  {letter: "H", question: "Empieza por H, persona o animal respecto de sus padres", answer: "hijo", tried: false}
];

var userAnswer;
var points = 0;
var hits = 0;
var fails = 0;
var user = [];
var userRanking = [];
var userDefRank = [];
var time;

function pasapalabraGame () {
	var userName = prompt("Introduce tu nombre");
	confirm ("Hola " + userName + ", bienvenido a Pasapalabra!");
  
	// NO FUNCIONA CORRECTAMENTE, NO INTERRUMPE EL CODIGO CUANDO SE AGOTA EL TIEMPO
  //time = setTimeout(outOfTime, 60000);
  
	while (hits + fails < pasapalabra.length) {
  	for (var key in pasapalabra) {
      if (pasapalabra[key].tried) {
        continue;
      } else {
    		userAnswer = prompt(pasapalabra[key].question);
        if (userAnswer.toLowerCase() === "end") {
          confirm ("Te rendiste. Aciertos: " + hits + " Fallos: " + fails);
          playUserAgain();
		 			return;
        } else if (userAnswer.toLowerCase() === pasapalabra[key].answer) {
      		confirm ("Acertaste la letra " + pasapalabra[key].letter + "!");
      		pasapalabra[key].tried = true;
          points++;
      		hits++;
    		} else if (userAnswer.toLowerCase() === "pasapalabra") {
      		continue;
    		} else {
      		confirm ("Fallaste la letra " + pasapalabra[key].letter + "!");
      		pasapalabra[key].tried = true;
          points--;
      		fails++;
    		}
  		}
    }
 	}
  //Almacena datos en la array user
  user.push(userName);
  user.push(points);
  user.push(hits);
  user.push(fails);
  confirm ("Terminaste el juego. Aciertos: " + hits + " Fallos: " + fails);  
  userRank();
  playUserAgain();  
}

function playUserAgain () {
	var playAgain = prompt("Quieres volver a jugar? (y/n)");
  	if ((playAgain.toLowerCase() === "y")) {
    	resetValues();
    	pasapalabraGame();
	} else {
  		confirm("Hasta otra!");
    	return;
 	}
}

function resetValues () {
  hits = 0;
  fails = 0;
  points = 0;
  userRanking = [];
  userDefRank = [];
  userName = "";
  for (var key in pasapalabra) {
  	pasapalabra[key].tried = false;
  }  
}

//CREA UN RANKING DE LOS USUARIOS EXISTENTES EN FUNCION DE LOS PUNTOS
function userRank () {
  for (var i = 1; i < user.length; i += 4) {
    //Crea una array con las puntaciones de los usuarios
    userRanking.push(user[i]);
    //Ordena las puntuaciones de mayor a menor valor
    userRanking.sort(sortNumber).reverse();
  }
  //Elimina los duplicados (funcion extraida de internet)
  userRanking = userRanking.filter (function (value, index, array) { 
    return array.indexOf (value) === index;
	});
  
  //Crea una array con los usuarios ordenados segun su puntuacion
  for (var i in userRanking) {
    for (var j = 1; j < user.length; j+=4) {
      //Detecta el usuario, aciertos y fallos mediante la puntuacion que ha adquirido
      if (userRanking[i] === user[j]) {
        userDefRank.push("[ Nombre: " + user[j-1]);
        userDefRank.push("Aciertos: " + user[j+1]);
        userDefRank.push("Fallos: " + user[j+2] + " ]");
      }
    }
  }
  confirm("RANKING DE USUARIOS " + userDefRank.join(", "));
}

//Funcion necesaria para ordenar numericamente en lugar de alfabeticamente
function sortNumber(a,b) {
    return a - b;
}

// NO FUNCIONA
function outOfTime() {
  alert ("Te quedaste sin tiempo! Aciertos: " + hits + " Fallos: " + fails);
  playUserAgain();
}

pasapalabraGame();
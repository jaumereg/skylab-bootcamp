// SS2 MINIPROJECT
// SKYLAB AIRLINES

confirm('Welcome to Skylab Airlines!');
var userInfo = prompt('Do you want to see the information of today\'s flights? (yes/no)');
var userExpensive = prompt('Do you want to see which is the most expensive flight for today? (yes/no)');
var userCheapest = prompt('Do you want to see which is the most cheapest flight for today? (yes/no)');
var userAverage = prompt('Do you want to see the average price of today\'s flights? (yes/no)');
var userScales = prompt('Do you want to see how many flights have scales today? (yes/no)');
var userLast = prompt('Do you want to see where the last 5 flights for today go? (yes/no)');

var flights = [
{id: '00', to: "NY", from: "Barcelona", cost: 700, scale: false},
{id: '01', to: "LA", from: "Madrid", cost: 1100, scale: true},
{id: '02', to: "Paris", from: "Barcelona", cost: 210, scale: false},
{id: '03', to: "Roma", from: "Barcelona", cost: 150, scale: false},
{id: '04', to: "London", from: "Madrid", cost: 200, scale: false},
{id: '05', to: "Madrid", from: "Barcelona", cost: 90, scale: false},
{id: '06', to: "Tokyo", from: "Madrid", cost: 1500, scale: true},
{id: '07', to: "Shangai", from: "Barcelona", cost: 800, scale: true},
{id: '08', to: "Sydney", from: "Barcelona", cost: 150, scale: true},
{id: '09', to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false}
];
var flightCost = [];
var flightTotalCost = 0;
var scales = 0;
var lastFlights = [];

function skylabAirlines () {
	// CONVERTS TRUE/FALSE TO YES/NO
	for (var key in flights) {
  		if (flights[key].scale) {
   	 		flights[key].scale = 'Yes';
  		} else {
   	 		flights[key].scale = 'No';
 		}
    	// PRINTS ALL FLIGHTS INFORMATION
   		if (userInfo === "yes") {
 			console.log('Flight ID: ' + flights[key].id + ', To: ' + flights[key].to + 	', From: ' + flights[key].from + ', Cost: $' + flights[key].cost + ', Scale: ' + flights[key].scale);
    	}
   	
    	// CREATES FLIGHT COST ARRAY
   		flightCost.push (flights[key].cost);
  	
   		// CREATES A TOTAL FLIGHTS COST
 		flightTotalCost += flights[key].cost;
  
    	// COUNTS THE NUMBER OF FLIGHTS WITH STOPOVER
  		if (flights[key].scale === 'Yes') {
   			scales++;
 		}
  	
    	// CREATES AN ARRAY OF THE LASTS FLIGHTS
  		if (key >= flights.length - 5) {
    		lastFlights.push (flights[key].to);
  		}
   
	}

	// PRINTS THE MOST EXPENSIVE FLIGHT AND THE CHEAPEST
	if (userExpensive === "yes") {
  		var expensiveFlight = flightCost.indexOf(Math.max.apply(null, flightCost));
  		console.log('The most expensive flight is the ID ' + flights[expensiveFlight].id + ' and costs $' + flights[expensiveFlight].cost);
	}

	if (userCheapest === "yes") {
  		var cheapestFlight = flightCost.indexOf(Math.min.apply(null, flightCost));
  		console.log('The most cheapest flight is the ID ' + flights[cheapestFlight].id + ' and costs $' + flights[cheapestFlight].cost);
	}
    
	
	// PRINTS AVERAGE PRICE OF TODAY'S FLIGHTS
	if (userAverage === "yes") {
		console.log('The average price of today\'s flights is $' + flightTotalCost/flights.length);
	}

	// PRINTS NUMBER OF SCALE FLIGHTS FOR TODAY
	if (userScales === "yes") {
		console.log('Today, there are ' + scales + ' flights with scale');
  	}

  	// PRINTS LASTS 5 FLIGHT DESTINATIONS FOR TODAY
	if (userLast === "yes") {
		console.log('The last flights for today go to ' + lastFlights.join(', '));
  	}
  
}

skylabAirlines();
function drink(age) {

	aDrinks = ['toddy', 'coke', 'beer', 'whisky']
	error = 'error, introduce a valid age'

	if (age < 14) drinkAge = aDrinks[0]
	else if (age < 18) drinkAge = aDrinks[1]
	else if (age < 21) drinkAge = aDrinks[2]
	else if (age > 21) drinkAge = aDrinks[3]
	else drinkAge = error

	return `drink ${drinkAge}`
}
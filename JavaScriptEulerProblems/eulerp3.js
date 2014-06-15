//What is the largest prime factor of the number 600851475143 ?

function isPrime(n){
	var max  = Math.ceil(Math.sqrt(n));
	var prime = true;
	for (var i = 2; i < max; i++) {

		if (n % i == 0){
			prime = false;
		}
	}
	return prime;
}

function primeFactorize(n){
	var factors = [];
	var primefactors = [];

	for (var i = 2; i < Math.ceil(Math.sqrt(n)); i++){
		if((n % i) == 0 ) {
			factors.push(i);
		}
	}

	for(var j = 0; j < factors.length; j++){
		if (isPrime(factors[j])) {
			primefactors.push(factors[j]);
		}
	}

	return primefactors;
}

alert(Math.max.apply(Math, primeFactorize(600851475143)));
//6857

//By considering the terms in the Fibonacci sequence whose values do not exceed four million,
//find the sum of the even-valued terms.

function getFib(n){
	if (n == 0){
		return 0;
	}
	else if (n == 1){
		return 1;
	}
	else {
		return getFib(n - 1) + getFib(n - 2);
	}
}

function sumEvenFib(max) {
	var i = 0;
	var sum = 0;
	while (getFib(i) < max){

		if((getFib(i) % 2) == 0){
			sum += getFib(i);						
		}

		i++;
		console.log(i);
	}

	return sum;
}


console.log(getFib(5));
alert("The sum of even-valued Fibonacci terms < 4,000,000 is" + " " + sumEvenFib(4000000));
//4613732




var summultiples = function(){
	var sum = 0;
	for(var i = 0; i < 1000; i++){
		if(i % 3 == 0 || i % 5 == 0){
			sum += i;
		}
		else sum = sum;
	}
	return sum;
}
alert("The sum of all the multiples of 3 or 5 below 1000s is" + " " + summultiples());
//233168
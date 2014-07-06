$(document).ready(function(){

	createGrid(100, 50);
	color();



});

function color(){
	$("div.grid ").mouseover(
		function(){
			$(this).css("background-color","black");	
		}
	);
}

function createGrid(width, height){
	for (var row = 0; row < height; row++){
		for(var col  = 0; col < width; col++){

			$("#container").append("<div class='grid'></div>");

		}
		$("#container").append("</br>");
	}
}

function reset(){
	$("#container").empty();

	var width = prompt("What width would you like your grid? (100x50 is good)");
	var height = prompt("What height would you like your grid? (100x50 is good)");
	createGrid(width, height);
	color();


}

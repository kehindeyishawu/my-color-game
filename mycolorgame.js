var numsquare = 9;
var pick ;
var square = $(".square");
var color = gencolor(numsquare);
var message = $("#message");
var button = $("button");
var rgbdisplay = $("h1 span");
var i = 0;


rgbdisplay.text(pick);

square.each(function(){
	if(color[i]){
		$(this).css("background-color", color[i]);
	}
	else{
		$(this).css("background-color", "rgb(10, 10, 10)");
		
	}
	
	i++;
});


square.on("click", function(){
	if($(this).css("background-color") === pick){
		
		square.css("background-color", pick);
		message.text("Nice Job");
		$("h1").css("background-color", pick);
		$(".stripe .reset").text("Play Again");
	}
	else{
			message.text("TRY AGAIN");
			$(this).css("background-color", "rgb(10, 10, 10)");
	}
});

$(".easy").click(function(){
	$(".stripe .hard").removeClass("bg");
	$(".stripe .medium").removeClass("bg");
	$(this).addClass("bg");
	numsquare=3;
	reset()
});

$(".stripe .medium").click(function(){
	$(".stripe .easy").removeClass("bg");
	$(".stripe .hard").removeClass("bg");
	$(this).addClass("bg");
	numsquare=6;
	reset()
});

$(".stripe .hard").click(function(){
	$(".stripe .easy").removeClass("bg");
	$(".stripe .medium").removeClass("bg");
	$(this).addClass("bg");
	numsquare=9;
	reset();
});

$(".reset").on("click", function(){
	
	if($(".stripe .easy").css("background-color")==="rgb(30, 20, 255)"){
		$(".stripe .medium").removeClass("bg");
		$(".stripe .hard").removeClass("bg");
		numsquare=3;
	}
	if($(".stripe .medium").css("background-color")==="rgb(30, 20, 255)"){
		$(".stripe .easy").removeClass("bg");
		$(".stripe .hard").removeClass("bg");
		numsquare=6;
	}
	if($(".stripe .hard").css("background-color")==="rgb(30, 20, 255)"){
		$(".stripe .easy").removeClass("bg");
		$(".stripe .medium").removeClass("bg");
	 	numsquare=9;
	}
	reset();
});







function gencolor(numsquare){
	var n = [] ;

	for (var i = 0; i < numsquare; i++) {
		
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		n.push("rgb("+r+", "+g+", "+b+")");
	}
	pick = n[Math.floor(Math.random()*numsquare)];
	
	return n;
}	


function reset (){
	// generate new color with new pick
	color = gencolor(numsquare); 
	// iterate color over square
	i=0;
	square.each(function(){
	if(color[i]){
		$(this).css("background-color", color[i]);
	}
	else{
		$(this).css("background-color", "rgb(10, 10, 10)");
	}
	
	i++;
	});

	// change rgb display to pick
	rgbdisplay.text(pick);
	// change message display to choose a color
	$("h1").css("background-color", "rgb(60, 80, 255)");
	$(".stripe span").text("Choose A Color")
	// change reset display to reset
	$(".stripe .reset").text("reset");
	// change buttons back to hard
	$(".stripe .hard").text("Hard");
	// set square condition
	square.on("click", function() {
		if($(this).css("background-color") === pick){
			
			square.each(function() {
				if($(this).css("background-color")==="rgb(10, 10, 10)"){
					$(this).css("background-color", "rgb(10, 10, 10)");
				}
				else{$(this).css("background-color", pick); }
			})
			
			$("h1").css("background-color", pick);
			$(".stripe .reset").text("Play Again");
			message.text("Nice Job");
		}
		else{
			
			$(this).css("background-color", "rgb(10, 10, 11)");
		
		}
	});
}
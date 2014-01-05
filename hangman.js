var deathCounter = 0,
	winCounter;
	

$(document).ready(function() {
	var hangWord="test";

	$( "#startButton" ).click(function(){
		$("#top").hide('slow');

		letsMakeADeal();
		wordCheck();

	})
});

function letsMakeADeal (alpha) {
	var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	$.each(choices, function (i, val) {
		$( "#main" ).append( "<span id=" + val + ">" + val + "</span>"); 	
		 })
	$("span").click(function (event){
		seeIfInWord($(this).attr("id"));
		$(this).addClass("used");
		$(this).unbind( "click" );




	})
};
function wordCheck() {

	hangWord = document.getElementById('wordToPlay').value;
	hangWordDisplay = hangWord.split("");
	$.each(hangWordDisplay, function (i, val) {
		$( "#board" ).append( "<span class=" + val + ">__</span>"); 	
		 })
	winCounter= jQuery.unique( hangWordDisplay ).length;


	
};



function seeIfInWord (checkLetter) {
		
		for (var i = hangWord.length - 1; i >= 0; i--) {
			if (checkLetter== hangWord.charAt(i)) {	
 				$("." + checkLetter).html(checkLetter);
 				winCounter --;
 				if (winCounter==0){
 					$( "span").unbind( "click" );
 	 				alert ("A winner is you!")
 				}
 				return;
			}
			
		} 
	deathCounter ++;	
 	 $("#howHung").attr('src', 'images/' + deathCounter + '.jpg');	
 	 if (deathCounter == 7){
 	 	$( "span").unbind( "click" );
 	 	alert ("Game over, man.")
 	 }
};











// go back to asking for a letter

	 		//insert the letter(s) onto the board and check the board for a victory


		// or else they lose a life and add one to a counter
		// display a body part and check the counter for a loss




// ask for word

// display board

// ask for letter

// check to see if the letter has already been used

//check to see if the letter is in the word

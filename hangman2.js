// define global var deathCounter
$(document).ready(function() {

	var hangWord = "lubrication";

		function seeIfInWord (checkLetter) {
			for (var i = hangWord.length - 1; i >= 0; i--) {
				if (checkLetter== hangWord.charAt(i)) {
	 				console.log(i+" yes")
				}
			}
		};
		 seeIfInWord ("a");

		 var choices = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

		 function letsMakeADeal (alpha) {


		 }
		 $.each(choices, function (i) {
		 	 $( "#main" ).append( document.createTextNode( "<span id=" + i + ">" + i + "</span>" ) );
		 })
		
 


	});
// go back to asking for a letter

	 		//insert the letter(s) onto the board and check the board for a victory


		// or else they lose a life and add one to a counter
		// display a body part and check the counter for a loss




// ask for word

// display board

// ask for letter

// check to see if the letter has already been used

//check to see if the letter is in the word

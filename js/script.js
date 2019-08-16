//Setup key bindings for each circle
let isreddown = false;
//the red button hasn't be pressed
let isbluedown = false;

let isorangedown = false;

let isgreendown = false;

let isyellowdown = false;

let issilverdown = false;

let ispurpledown = false;

let isltgreentdown = false;

let isbrowndown = false;




$(document).on('keydown', function(event){
	let key = event.key;
    

	if(key === '1' || key === '2' || key === '3') {
		
		$('.circle1').addClass('active');
		 document.getElementById('audio1').play();
		 if (isreddown == false) {
		     isreddown = true;
		 } else {
		     isreddown = false;
		     document.getElementById('audio1').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});




$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'A' || key === 'C' || key === 'E' || key === 'a' || key === 'c' || key === 'e') {
		
		$('.circle2').addClass('active');
		 document.getElementById('audio2').play();
		 if (isbluedown == false) {
		     isbluedown = true;
		 } else {
		     isbluedown = false;
		     document.getElementById('audio2').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});




$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'B' || key === 'D' || key === 'F' || key === 'M' || key === 'b' || key === 'd' || key === 'f' || key === 'm') {
		
		$('.circle3').addClass('active');
		 document.getElementById('audio3').play();
		 if (isorangedown == false) {
		     isorangedown = true;
		 } else {
		     isorangedown = false;
		     document.getElementById('audio3').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});







$(document).on('keydown', function(event){
	let key = event.key;

	if(key === '4' || key === '5' || key === '6') {
		
		$('.circle4').addClass('active');
		 document.getElementById('audio4').play();
		 if (isgreendown == false) {
		     isgreendown= true;
		 } else {
		     isgreendown = false;
		     document.getElementById('audio4').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});



$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'N' || key === 'Q' || key === 'R' || key === 'W' || key === 'n' || key === 'q' || key === 'r' || key === 'w') {
		
		$('.circle5').addClass('active');
		 document.getElementById('audio5').play();
		 if (isyellowdown == false) {
		     isyellowdown = true;
		 } else {
		     isyellowdown = false;
		     document.getElementById('audio5').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});






$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'L' || key === 'l' ) {
		
		$('.circle6').addClass('active');
		 document.getElementById('audio6').play();
		 if (issilverdown == false) {
		     issilverdown = true;
		 } else {
		     issilverdown = false;
		     document.getElementById('audio6').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});







$(document).on('keydown', function(event){
	let key = event.key;

	if(key === '7') {
		
		$('.circle7').addClass('active');
		 document.getElementById('audio7').play();
		 if (ispurpledown == false) {
		     ispurpledown = true;
		 } else {
		     ispurpledown = false;
		     document.getElementById('audio7').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  });






$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'G' || key === 'g' ) {
		
		$('.circle8').addClass('active');
		 document.getElementById('audio8').play();
		 if (isltgreentdown == false) {
		     isltgreentdown = true;
		 } else {
		     isltgreentdown = false;
		     document.getElementById('audio8').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  
});






$(document).on('keydown', function(event){
	let key = event.key;

	if(key === 'J' || key === 'Z' || key === 'j' || key === 'z' ) {
		
		$('.circle9').addClass('active');
		 document.getElementById('audio9').play();
		 if (isbrowndown == false) {
		     isbrowndown = true;
		 } else {
		     isbrowndown = false;
		     document.getElementById('audio9').pause();

		 }
	}
});

$(document).on('keyup', function(event){
	$('.circle-wrap div').removeClass('active');
  });



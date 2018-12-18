

let slide = 1;
let oppositeNext = [1,0,2];		//deal with the reverse slide position
let oppositePrevious = [1,2,1];
let darkMode = true;

//scrollTO
$.fn.scrollTo = function (speed) {
	if (typeof(speed) === 'undefined')
			speed = 1000;

	$('html, body').animate({
			scrollTop: parseInt($(this).offset().top - 50)
	}, speed);
};

$('.switch-1').click(function(){
	$( ".slide" ).animate({
    marginLeft : "0vw"
  }, 1000, function() {
    slide = 1;
    setCurrent()
  	hidePreviousAndNext()
  	changeColor(slide)
  });

	$( ".reverse-slide" ).animate({
    marginLeft : "-200vw"
  }, 1000, function() {})
	return false;
})

$('.switch-2').click(function(){
	$( ".slide" ).animate({
    marginLeft : "-100vw"
  }, 1000, function() {
    slide = 2;
    setCurrent()
  	hidePreviousAndNext()
  	changeColor(slide)
  });

		$( ".reverse-slide" ).animate({
    marginLeft : "-100vw"
  }, 1000, function() {console.log('done')})

	return false;
})

$('.switch-3').click(function(){
	$( ".slide" ).animate({
    marginLeft : "-200vw"
  }, 1000, function() {
    slide = 3;
    setCurrent()
  	hidePreviousAndNext()
  	changeColor(slide)
  });

	$( ".reverse-slide" ).animate({
    marginLeft : "0vw"
  }, 1000, function() {})


	return false;
})

$('.next').click(function(){

	if($('.slide-' + (slide + 1)).length){
		$( ".slide" ).animate({
    		marginLeft : ((slide) * -100) + "vw"
  		}, 1000, function() {
  			slide ++;
  			$('.switch-' + slide).fadeTo(1000,1)
  			setCurrent()
  			hidePreviousAndNext()
  			changeColor(slide)
  		});

		$( ".reverse-slide" ).animate({
    		marginLeft : ((oppositeNext[slide - 1]) * -100) + "vw"
  		}, 1000, function() {})

	}
	return false;
});

$('.previous').click(function(){

	if($('.slide-' + (slide - 1)).length){
		$( ".slide" ).animate({
    		marginLeft : ((slide - 2) * -100) + "vw"
  		}, 1000, function() {
  			slide --;
  			setCurrent()
  			hidePreviousAndNext()
  			changeColor(slide)
  		});
			console.log(slide)
			console.log(oppositePrevious[slide - 1])
			console.log(((oppositePrevious[slide - 1]) * -100) + "vw")


  		$( ".reverse-slide" ).animate({
    		marginLeft : ((oppositePrevious[slide - 1]) * -100) + "vw"
  		}, 1000, function() {})
	}
	return false;
});
/*	USELESS AS FOR NOW
$('.subheader').click(function(){
	$('.subheader').slideUp(2000);
	return false;
})
*/

$('.footer-switch').click(function(){
	$('.footer-slide').fadeToggle();
})

$('.footer-lightmode').click(function(){
	changeMode();
});



function hidePreviousAndNext(){
	if (slide == 3) $('.next').fadeTo(500,0);
	else $('.next').fadeTo(500,1);

	if (slide == 1) $('.previous').fadeTo(500,0);
	else $('.previous').fadeTo(500,1);
}

function setCurrent(){
	$('.current').removeClass('current');
  	$('.switch-' + slide).addClass('current');
}

function changeColor(color){
	colors = ['#1b998b', '#ed217c',  '#fffd82']
	document.documentElement.style.setProperty('--main-color', colors[color - 1])
}


function changeMode(){
	if (darkMode == true){
		document.documentElement.style.setProperty('--dark', 'rgb(172, 188, 204)');
    document.documentElement.style.setProperty('--darker', 'rgb(172, 188, 204)');
   	document.documentElement.style.setProperty('--text', 'black');
		document.documentElement.style.setProperty('--grey', 'rgb(172, 188, 204)');
		document.documentElement.style.setProperty('--background', 'rgb(172, 188, 204)');
		document.documentElement.style.setProperty('--banner', 'none');
		document.documentElement.style.setProperty('--shadow', '-2px 2px 300px 1px var(--main-color)');

	}
	else{
		document.documentElement.style.setProperty('--dark', 'rgba(40,43,48)');
    document.documentElement.style.setProperty('--darker', '#23272A');
   	document.documentElement.style.setProperty('--text', '#a5a5a5');
		document.documentElement.style.setProperty('--grey', 'rgb(54,57,63)');
		document.documentElement.style.setProperty('--background', 'rgb(15,17,19)');
		document.documentElement.style.setProperty('--banner', 'initial');
		document.documentElement.style.setProperty('--shadow', '0');
	}

	
	darkMode = !darkMode;

}

$('.image-modal').click(function(){
	$(this).css('display', 'none')
})

$('.project-images img').click(function(){
	$('.image-modal').find('img').attr("src",$(this).attr("src"));
	$('.image-modal').css('display', 'flex')
})

$('.toggle').click(function(){
	let elm = '#' + $(this).data("target")
	$('.project').not(elm).slideUp();
	$(elm).slideToggle("slow",function(){$(elm).scrollTo();})
	
});



let slide = 1;
let oppositeNext = [1,0,2];		//deal with the reverse slide position
let oppositePrevious = [1,2,1];

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

$('.subheader').click(function(){
	$('.subheader').slideUp(2000);
	return false;
})


$('.footer-switch').click(function(){
	$('.footer-slide').fadeToggle();
})


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

$('.image-modal').click(function(){
	$(this).css('display', 'none')
})

$('.project-images img').click(function(){
	$('.image-modal').find('img').attr("src",$(this).attr("src"));
	$('.image-modal').css('display', 'flex')
})

$('.toggle').click(function(){
	$('.project').not('#' + $(this).data("target")).slideUp();
	$('#' + $(this).data("target")).slideToggle("slow");
});
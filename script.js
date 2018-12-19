$( document ).ready(function() {

	let darkMode = true;

	//help with slide positions (which is next and which is previous)
	let slide = 1;
	let oppositeNext = [1,0,2];		
	let oppositePrevious = [1,2,1];

	//the three main colors to switch from
	let colors = ['#1b998b', '#ed217c',  '#fffd82']	

	/*
		Scroll to the jquery selector given in parameter
			IN: jquery selector
	*/
	$.fn.scrollTo = function (speed) {
		if (typeof(speed) === 'undefined')
				speed = 1000;

		$('html, body').animate({
				scrollTop: parseInt($(this).offset().top - 50)
		}, speed);
	};

	//switch to the first slide
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

	//switch to the second slide
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

	//switch to the third slide
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

	//switch to the next slide
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

	//switch to the previous slide
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

				$( ".reverse-slide" ).animate({
					marginLeft : ((oppositePrevious[slide - 1]) * -100) + "vw"
				}, 1000, function() {})
		}
		return false;
	});

	//toggle contact info
	$('.footer-switch').click(function(){
		$('.footer-slide').fadeToggle();
	})

	//toggle light mode
	$('.footer-lightmode').click(function(){
		changeMode();
	});

	// detect if the next and previous link must be hidden if so hide them
	function hidePreviousAndNext(){
		if (slide == 3) $('.next').fadeTo(500,0);
		else $('.next').fadeTo(500,1);

		if (slide == 1) $('.previous').fadeTo(500,0);
		else $('.previous').fadeTo(500,1);
	}

	// set nav link to current
	function setCurrent(){
		$('.current').removeClass('current');
			$('.switch-' + slide).addClass('current');
	}

	/*
		swap the main color from the array
		IN: valid css color
	*/
	function changeColor(color){
		document.documentElement.style.setProperty('--main-color', colors[color - 1])
	}


	// switch the css var to set lightMode or darkMode
	function changeMode(){
		if (darkMode == true){
			document.documentElement.style.setProperty('--dark', 'rgb(172, 188, 204)');
			document.documentElement.style.setProperty('--darker', 'rgb(172, 188, 204)');
			document.documentElement.style.setProperty('--text', 'black');
			document.documentElement.style.setProperty('--grey', 'rgb(172, 188, 204)');
			document.documentElement.style.setProperty('--background', 'rgb(172, 188, 204)');
			document.documentElement.style.setProperty('--banner', 'none');
			document.documentElement.style.setProperty('--shadow', '-2px 2px 300px 1px var(--main-color), -1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset');

			document.documentElement.style.setProperty('--dark', 'rgb(117, 137, 191)');
			document.documentElement.style.setProperty('--background', 'rgb(117, 137, 191)');
		}
		else{
			document.documentElement.style.setProperty('--dark', 'rgba(40,43,48)');
			document.documentElement.style.setProperty('--darker', '#23272A');
			document.documentElement.style.setProperty('--text', '#a5a5a5');
			document.documentElement.style.setProperty('--grey', 'rgb(54,57,63)');
			document.documentElement.style.setProperty('--background', 'rgb(15,17,19)');
			document.documentElement.style.setProperty('--banner', 'initial');
			document.documentElement.style.setProperty('--shadow', '-1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset');
		}
		darkMode = !darkMode;
	}

	// dismiss the image modal
	$('.image-modal').click(function(){
		$(this).css('display', 'none')
	})

	// toggle the image modam woth the image clicked
	$('.project-images img').click(function(){
		$('.image-modal').find('img').attr("src",$(this).attr("src"));
		$('.image-modal').css('display', 'flex')
	})

	// toggle the project selected and slide it 
	$('.toggle').click(function(){
		let elm = '#' + $(this).data("target")
		$('.project').not(elm).slideUp();
		$('.toggle').removeClass("project-current");
		$(this).addClass("project-current");
		$(elm).slideToggle("slow",function(){$(elm).scrollTo();})
	});

});
//menu//
		jQuery(function(){
			
			jQuery('ul.sf-menu').superfish({
				delay:       1000, 		
				animation:   {opacity:'show',height:'show'}, 
				speed:       'normal',  
				autoArrows:  false  
			});
		});
		
		
//slider//
	jQuery(window).load(function() {
		jQuery(function(){
			jQuery('.camera_wrap').camera({
				autoAdvance			: true,	
				mobileAutoAdvance	: true, 
				barDirection		: 'leftToRight',	
				barPosition			: 'bottom',	
				cols				: 6,
				easing				: 'easeInOutExpo',	
				mobileEasing		: '',	
				fx					: 'simpleFade',													
				mobileFx			: '',	
				gridDifference		: 250,	
				height				: '59.89%',	
				imagePath			: 'images/',	
				loader				: 'none',	
				loaderColor			: '#eeeeee', 
				loaderBgColor		: '#222222', 
				loaderOpacity		: .8,	
				loaderPadding		: 2,	
				loaderStroke		: 7,	
				minHeight			: '244px',	
				navigation			: false,	
				navigationHover		: false,	
				pagination			: true,
				playPause			: false,	
				pieDiameter			: 38,
				piePosition			: 'rightTop',	
				rows				: 4,
				slicedCols			: 6,
				slicedRows			: 4,
				thumbnails			: false,
				time				: 7000,	
				transPeriod			: 1200,	
				
		//callbacks
				onEndTransition		: function() {  },	
				onLoaded			: function() {  },	
				onStartLoading		: function() {  },	
				onStartTransition	: function() {  }	
			});
		});
	});
	
//scroll top//
		
//scroll top//

$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
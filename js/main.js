var scroll25 = false;
var scroll50 = false;
var scroll75 = false;
var scroll100 = false;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var isSection = false

var jq = jQuery.noConflict()

jq(document).ready(function(){
	
	init();
	getWidth()
	getHeight()

	var sub_width = 0;
	var sub_height = 0;
	jq(".loupe").css("background","url('" + jq(".piece-art").attr("src") + "') no-repeat");

	jq(".picture-art").mousemove(function(e){
		if(!sub_width && !sub_height){
			var image_object = new Image();
			image_object.src = jq(".piece-art").attr("src");
			sub_width = image_object.width;
			sub_height = image_object.height;
		}else{
			var magnify_position = jq(this).offset();

			var mx = e.pageX - magnify_position.left;
			var my = e.pageY - magnify_position.top;
					
			if(mx < jq(this).width() && my < jq(this).height() && mx > 0 && my > 0){
				jq(".loupe").fadeIn(100);
			}else{
				jq(".loupe").fadeOut(100);
			}
			if(jq(".loupe").is(":visible")){
				var rx = Math.round(mx/jq(".piece-art").width()*sub_width - jq(".loupe").width()/2)*-1;
				var ry = Math.round(my/jq(".piece-art").height()*sub_height - jq(".loupe").height()/2)*-1;

				var bgp = rx + "px " + ry + "px";
						
				var px = mx - jq(".loupe").width()/2;
				var py = my - jq(".loupe").height()/2;

				jq(".loupe").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	});

	var sub_width_two = 0;
	var sub_height_two = 0;
	jq(".loupe-two").css("background","url('" + jq(".piece-art-two").attr("src") + "') no-repeat");

	jq(".picture-art-two").mousemove(function(e){
		if(!sub_width_two && !sub_height_two){
			var image_object = new Image();
			image_object.src = jq(".piece-art-two").attr("src");
			sub_width_two = image_object.width;
			sub_height_two = image_object.height;
		}else{
			var magnify_position = jq(this).offset();

			var mx = e.pageX - magnify_position.left;
			var my = e.pageY - magnify_position.top;
					
			if(mx < jq(this).width() && my < jq(this).height() && mx > 0 && my > 0){
				jq(".loupe-two").fadeIn(100);
			}else{
				jq(".loupe-two").fadeOut(100);
			}
			if(jq(".loupe-two").is(":visible")){
				var rx = Math.round(mx/jq(".piece-art-two").width()*sub_width_two - jq(".loupe-two").width()/2)*-1;
				var ry = Math.round(my/jq(".piece-art-two").height()*sub_height_two - jq(".loupe-two").height()/2)*-1;

				var bgp = rx + "px " + ry + "px";
						
				var px = mx - jq(".loupe-two").width()/2;
				var py = my - jq(".loupe-two").height()/2;

				jq(".loupe-two").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	});

	var sub_width_three = 0;
	var sub_height_three = 0;
	jq(".loupe-three").css("background","url('" + jq(".piece-art-three").attr("src") + "') no-repeat");

	jq(".picture-art-three").mousemove(function(e){
		if(!sub_width_three && !sub_height_three){
			var image_object = new Image();
			image_object.src = jq(".piece-art-three").attr("src");
			sub_width_three = image_object.width;
			sub_height_three = image_object.height;
		}else{
			var magnify_position = jq(this).offset();

			var mx = e.pageX - magnify_position.left;
			var my = e.pageY - magnify_position.top;
					
			if(mx < jq(this).width() && my < jq(this).height() && mx > 0 && my > 0){
				jq(".loupe-three").fadeIn(100);
			}else{
				jq(".loupe-three").fadeOut(100);
			}
			if(jq(".loupe-three").is(":visible")){
				var rx = Math.round(mx/jq(".piece-art-three").width()*sub_width_three - jq(".loupe-three").width()/2)*-1;
				var ry = Math.round(my/jq(".piece-art-three").height()*sub_height_three - jq(".loupe-three").height()/2)*-1;

				var bgp = rx + "px " + ry + "px";
						
				var px = mx - jq(".loupe-three").width()/2;
				var py = my - jq(".loupe-three").height()/2;

				jq(".loupe-three").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	});

	var sub_width_four = 0;
	var sub_height_four = 0;
	jq(".loupe-four").css("background","url('" + jq(".piece-art-four").attr("src") + "') no-repeat");

	jq(".picture-art-four").mousemove(function(e){
		if(!sub_width_four && !sub_height_four){
			var image_object = new Image();
			image_object.src = jq(".piece-art-four").attr("src");
			sub_width_four = image_object.width;
			sub_height_four = image_object.height;
		}else{
			var magnify_position = jq(this).offset();

			var mx = e.pageX - magnify_position.left;
			var my = e.pageY - magnify_position.top;
					
			if(mx < jq(this).width() && my < jq(this).height() && mx > 0 && my > 0){
				jq(".loupe-four").fadeIn(100);
			}else{
				jq(".loupe-four").fadeOut(100);
			}
			if(jq(".loupe-four").is(":visible")){
				var rx = Math.round(mx/jq(".piece-art-four").width()*sub_width_four - jq(".loupe-four").width()/2)*-1;
				var ry = Math.round(my/jq(".piece-art-four").height()*sub_height_four - jq(".loupe-four").height()/2)*-1;

				var bgp = rx + "px " + ry + "px";
						
				var px = mx - jq(".loupe-four").width()/2;
				var py = my - jq(".loupe-four").height()/2;

				jq(".loupe-four").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	});

	jq(window).scroll(function(){
		scrollSocialNetworks();
		scrollActiv();
		parallaxPicture(jq(window).scrollTop());


		// Changing position for last picture
		var scrollWindow = jq(window).scrollTop()
		var textReference = jq('.text-reference').offset().top + jq('.text-reference').outerHeight()
		var sectionFourPictureTop = jq('.full-picture').offset().top;
		var sectionFourPictureBottom = sectionFourPictureTop + jq('.full-picture').height()
	
		
		var cardOneTop = jq('.card__recreation--one').offset().top - jq(window).height()
		var CardOneBottom =  jq('.card__recreation--one').offset().top + jq('.card__recreation--one').outerHeight()
		var cardTwoTop = jq('.card__recreation--two').offset().top - jq(window).height()
		var CardTwoBottom =  jq('.card__recreation--two').offset().top + jq('.card__recreation--two').outerHeight()



		if( (scrollWindow >= cardOneTop) && (scrollWindow <= CardOneBottom) ) {
			jq('.bg-one').addClass('visible')
		} else {
			jq('.bg-one').removeClass('visible')
		}

		if( (scrollWindow >= cardTwoTop) && (scrollWindow <= CardTwoBottom) ) {
			jq('.bg-two').addClass('visible')
		} else {
			jq('.bg-two').removeClass('visible')
		}


		if( (scrollWindow >= sectionFourPictureTop) && (scrollWindow <= sectionFourPictureBottom) ) {
			jq('.full-picture').addClass('fixed')
			jq('.full-picture-two').addClass('fixed')
		} 

		if (scrollWindow <= textReference) {
			jq('.full-picture').removeClass('fixed')
			jq('.full-picture-two').removeClass('fixed')
		}

		// Changing the src for the last picture
		var cardRecreationBottom = jq('.card__recreation--one').offset().top + jq('.card__recreation--one').outerHeight()

		if(scrollWindow >= cardRecreationBottom) {
			jq('.full-picture').addClass('hide')
			//jq('.full-picture-bg').addClass('visible')
		} else {
			jq('.full-picture').removeClass('hide')
			//jq('.full-picture-bg').removeClass('visible')
		}

		//Make footer visible
		var cardRecreationTwoBottom = jq('.card__recreation--two').offset().top + jq('.card__recreation--two').outerHeight()
		
		if(scrollWindow >= cardRecreationTwoBottom) {
			jq('.full-picture-two').addClass('hide')
			jq('.footer').addClass('show')
		} else {
			jq('.full-picture-two').removeClass('hide')
			jq('.footer').removeClass('show')
			
		}


	})




	//FIRST CARD MOBILE
	jq('.observer-escalante').click(function(){
		jq('.card-escalante').addClass('visible')
		jq(this).addClass('hidden');
	});

	jq('.button-mobile-one').click(function(){
		jq('.escalante-picture').attr('src', 'https://www.ecestaticos.com/file/6b15f854e0b2a32b2f0db2dc262b1441/1573578567-galeria-escalante-movil.jpg')
		jq('.card-escalante').removeClass('visible')
		jq('.observer-inner-escalante').addClass('visible')
	});

	jq('.observer-inner-escalante').click(function(){
		jq('.card-virgen').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-one').click(function(){
		jq('.escalante-picture').attr('src', 'https://www.ecestaticos.com/file/ddc6066f6a11e62053f1f5a73ccd3c75/1573574607-escalante-movil.jpg')
		jq('.card-virgen').removeClass('visible');
		jq('.observer-escalante').removeClass('hidden')
	});

	jq('.close-one').click(function(){
		jq('.observer-escalante').removeClass('hidden');
		jq('.card-escalante').removeClass('visible');
	});

	jq('.close-inner-escalante').click(function(){
		jq('.card-virgen').removeClass('visible');
		jq('.observer-inner-escalante').addClass('visible')
	});

	//SECOND CARD MOBILE
	jq('.observer-pontecorvo').click(function(){
		jq('.card-pontecorvo').addClass('visible')
		jq(this).addClass('hidden')
	});

	jq('.button-mobile-two').click(function(){
		jq('.pontecorvo-picture').attr('src', 'https://www.ecestaticos.com/file/d404aa777e09cb192310ca202514bee6/1573581010-galeria-pontecorvo-movil.jpg')
		jq('.card-pontecorvo').removeClass('visible')
		jq('.observer-inner-pontecorvo').addClass('visible')
	});

	jq('.observer-inner-pontecorvo').click(function(){
		jq('.card-babel-1').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-two').click(function(){
		jq('.pontecorvo-picture').attr('src', 'https://www.ecestaticos.com/file/756bfa4ed55be2d2dc1ba65cb2eb5b0d/1573575470-pontecorvo-movil.jpg')
		jq('.card-babel-1').removeClass('visible');
		jq('.observer-pontecorvo').removeClass('hidden')
	});

	jq('.close-two').click(function(){
		jq('.observer-pontecorvo').removeClass('hidden');
		jq('.card-pontecorvo').removeClass('visible');
	});

	jq('.close-inner-pontecorvo').click(function(){
		jq('.card-babel-1').removeClass('visible');
		jq('.observer-inner-pontecorvo').addClass('visible')
	});

	//THIRD CARD MOBILE
	jq('.observer-teresa').click(function(){
		jq('.card-teresa').addClass('visible')
		jq(this).addClass('hidden')
	});

	jq('.button-mobile-three').click(function(){
		jq('.teresa-picture').attr('src', 'https://www.ecestaticos.com/file/ad4d30ee400ac9191a203995f2aa0a95/1573581304-galeria-teresa-movil.jpg')
		jq('.card-teresa').removeClass('visible')
		jq('.observer-inner-teresa').addClass('visible')
	});

	jq('.observer-inner-teresa').click(function(){
		jq('.card-babel-2').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-three').click(function(){
		jq('.teresa-picture').attr('src', 'https://www.ecestaticos.com/file/1e8c9f0fa6f9309fcd2f2aef64c7cfdc/1573575480-teresa-movil.jpg')
		jq('.card-babel-2').removeClass('visible');
		jq('.observer-teresa').removeClass('hidden')
	});

	jq('.close-three').click(function(){
		jq('.observer-teresa').removeClass('hidden');
		jq('.card-teresa').removeClass('visible');
	});

	jq('.close-inner-teresa').click(function(){
		jq('.card-babel-2').removeClass('visible');
		jq('.observer-inner-teresa').addClass('visible')
	});

	//FOURTH CARD MOBILE
	jq('.observer-baeza').click(function(){
		jq('.card-baeza').addClass('visible')
		jq(this).addClass('hidden')
	});

	jq('.button-mobile-four').click(function(){
		jq('.baeza-picture').attr('src', 'https://www.ecestaticos.com/file/69d9fa834cd3700c7a8bab85623b95b6/1573581773-galeria-baeza-movil.jpg')
		jq('.card-baeza').removeClass('visible')
		jq('.observer-inner-baeza').addClass('visible')
	});

	jq('.observer-inner-baeza').click(function(){
		jq('.card-cosecha').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-four').click(function(){
		jq('.baeza-picture').attr('src', 'https://www.ecestaticos.com/file/a6b28a15182c5360f44a876c1309877d/1573575483-baeza-movil.jpg')
		jq('.card-cosecha').removeClass('visible');
		jq('.observer-baeza').removeClass('hidden')
	});

	jq('.close-four').click(function(){
		jq('.observer-baeza').removeClass('hidden');
		jq('.card-baeza').removeClass('visible');
	});

	jq('.close-inner-baeza').click(function(){
		jq('.card-cosecha').removeClass('visible');
		jq('.observer-inner-baeza').addClass('visible')
	});

	//FIFTH CARD MOBILE
	jq('.observer-mateo').click(function(){
		jq('.card-mateo').addClass('visible')
		jq(this).addClass('hidden')
	});

	jq('.button-mobile-five').click(function(){
		jq('.mateo-picture').attr('src', 'https://www.ecestaticos.com/file/d1229c04a6083cdc7ba911cd98650a90/1573582115-galeria-mateo-movil.jpg')
		jq('.card-mateo').removeClass('visible')
		jq('.observer-inner-mateo').addClass('visible')
	});

	jq('.observer-inner-mateo').click(function(){
		jq('.card-cosecha-2').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-five').click(function(){
		jq('.mateo-picture').attr('src', 'https://www.ecestaticos.com/file/1571a07fc80513cd99136f6e5bcb72e6/1573582078-mateo-movil.jpg')
		jq('.card-cosecha-2').removeClass('visible');
		jq('.observer-mateo').removeClass('hidden')
	});

	jq('.close-five').click(function(){
		jq('.observer-mateo').removeClass('hidden');
		jq('.card-mateo').removeClass('visible');
	});

	jq('.close-inner-mateo').click(function(){
		jq('.card-cosecha-2').removeClass('visible');
		jq('.observer-inner-mateo').addClass('visible')
	});


	//SIXTH CARD MOBILE
	jq('.observer-jabonera').click(function(){
		jq('.card-jabonera').addClass('visible')
		jq(this).addClass('hidden')
	});

	jq('.button-mobile-six').click(function(){
		jq('.jabonera-picture').attr('src', 'https://www.ecestaticos.com/file/9ddd86ad1e38f940444f076dcc9a0b61/1573733935-galeria-estefania-movil.jpg')
		jq('.card-jabonera').removeClass('visible')
		jq('.observer-inner-jabonera').addClass('visible')
	});

	jq('.observer-inner-jabonera').click(function(){
		jq('.card-gioconda').addClass('visible');
		jq(this).removeClass('visible')
	});

	jq('.button-mobile-inner-six').click(function(){
		jq('.jabonera-picture').attr('src', 'https://www.ecestaticos.com/file/a350a84ed43d760a54fce66e8d8d99fd/1573733410-estefania-de-los-santos-movil-1.jpg')
		jq('.card-gioconda').removeClass('visible');
		jq('.observer-jabonera').removeClass('hidden')
	});

	jq('.close-six').click(function(){
		jq('.observer-jabonera').removeClass('hidden');
		jq('.card-jabonera').removeClass('visible');
	});

	jq('.close-inner-jabonera').click(function(){
		jq('.card-gioconda').removeClass('visible');
		jq('.observer-inner-jabonera').addClass('visible')
	});


	jq('.button-one').click(function(){
		jq('.img-one').addClass('change');
		//jq('.loupe-one').addClass('hidden');

		jq('.frame-escalante').addClass('scale');
		setTimeout(function(){
			jq('.frame-escalante').addClass('hide');
		},500);

		jq('.intro-one').addClass('hidden');
		jq('.inner--art-one').addClass('visible');
		jq('.info-one').addClass('visible');
		jq(this).css('display', 'none')
		jq('.button-one-remove').css('display', 'flex')
	});

	jq('.button-one-remove').click(function(){
		jq('.img-one').removeClass('change');
		//jq('.loupe-one').removeClass('hidden');

		jq('.frame-escalante').removeClass('scale');
		jq('.frame-escalante').removeClass('hide');

		jq('.intro-one').removeClass('hidden');
		jq('.inner--art-one').removeClass('visible');
		jq('.info-one').removeClass('visible');
		jq(this).css('display', 'none')
		jq('.button-one').css('display', 'flex')
	});

	jq('.button-two').click(function(){
		jq('.img-two').addClass('change');

		jq('.frame-pontecorvo').addClass('scale');
		jq('.frame-teresa').addClass('scale');
		setTimeout(function(){
			jq('.frame-pontecorvo').addClass('hide');
			jq('.frame-teresa').addClass('hide');
		},500);

		setTimeout(function(){
			jq('.horizontal-one').css('position', 'relative');
		}, 900)

		jq('.intro-two').addClass('hidden');
		jq('.inner--art-two').addClass('visible');
		jq('.info-two').addClass('visible');
		jq('.horizontal-one').removeClass('bg--black');
		
		jq(this).css('display', 'none')
		jq('.button-two-remove').css('display', 'flex')
	});

	jq('.button-two-remove').click(function(){
		jq('.img-two').removeClass('change');

		jq('.horizontal-one').css('position', 'absolute');

		jq('.frame-pontecorvo').removeClass('scale');
		jq('.frame-teresa').removeClass('scale');
		jq('.frame-pontecorvo').removeClass('hide');
		jq('.frame-teresa').removeClass('hide');
		
		jq('.intro-two').removeClass('hidden');
		jq('.inner--art-two').removeClass('visible');
		jq('.info-two').removeClass('visible');
		jq('.horizontal-one').addClass('bg--black');
		jq('.frame-pontecorvo').removeClass('scale');
		jq('.frame-teresa').removeClass('scale');
		jq(this).css('display', 'none')
		jq('.button-two').css('display', 'flex')
	});

	jq('.button-three').click(function(){
		jq('.img-three').addClass('change')
		//jq('.loupe-three').addClass('hidden')
		
		jq('.frame-baeza').addClass('scale');
		jq('.frame-mateo').addClass('scale');
		setTimeout(function(){
			jq('.frame-baeza').addClass('hide');
			jq('.frame-mateo').addClass('hide');
		},500);

		setTimeout(function(){
			jq('.horizontal-two').css('position', 'relative');
		}, 900)

		jq('.intro-three').addClass('hidden')
		jq('.horizontal-two').removeClass('bg--black');
		jq('.inner--art-three').addClass('visible')
		jq('.info-three').addClass('visible')
		jq('.frame-baeza').addClass('scale');
		jq('.frame-mateo').addClass('scale');
		jq(this).css('display', 'none')
		jq('.button-three-remove').css('display', 'flex')
	});

	jq('.button-three-remove').click(function(){
		jq('.img-three').removeClass('change')
		//jq('.loupe-three').removeClass('hidden')
		jq('.horizontal-two').css('position', 'absolute');
		jq('.frame-baeza').removeClass('scale');
		jq('.frame-mateo').removeClass('scale');
		jq('.frame-baeza').removeClass('hide');
		jq('.frame-mateo').removeClass('hide');

		jq('.intro-three').removeClass('hidden')
		jq('.horizontal-two').addClass('bg--black');
		jq('.inner--art-three').removeClass('visible')
		jq('.info-three').removeClass('visible')
		jq('.frame-baeza').removeClass('scale');
		jq('.frame-mateo').removeClass('scale');
		jq(this).css('display', 'none')
		jq('.button-three').css('display', 'flex')
	});

	jq('.button-four').click(function(){
		jq('.img-four').addClass('change');
		//jq('.loupe-four').removeClass('hidden');

		jq('.frame-jabonera').addClass('scale');
		setTimeout(function(){
			jq('.frame-jabonera').addClass('hide');
		},500);

		jq('.intro-four').addClass('hidden');
		jq('.inner--art-four').addClass('visible');
		jq('.info-four').addClass('visible');
		jq(this).css('display', 'none')
		jq('.button-four-remove').css('display', 'flex')
	});

	jq('.button-four-remove').click(function(){
		jq('.img-four').removeClass('change');
		//jq('.loupe-four').addClass('hidden');

		jq('.frame-jabonera').removeClass('hide');
		jq('.frame-jabonera').removeClass('scale');

		jq('.intro-four').removeClass('hidden');
		jq('.inner--art-four').removeClass('visible');
		jq('.info-four').removeClass('visible');
		jq(this).css('display', 'none')
		jq('.button-four').css('display', 'flex')
	});

	jq('.carousel').slick({
		dots: true,
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '10px'
	});

	jq('.carousel__mobile').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '10px'
	});


});
function isDesktop() {
	return jq(window).width() > 1200
}
function isTablet() {
	return jq(window).width() > 768 < 1200
}
function isMobile() {
	return jq(window).width() < 768
}
//parallax
function parallaxPicture(scroll) {

	var ratio = scroll / windowHeight

	// if(ratio < 1 ) {
	// 	var translateResult = 60*ratio
	// 	jq('.position--two').css({
	// 		transform: "translateY( "+translateResult+"px)"
	// 	});
	// 	jq('.position--one').css({
	// 		transform: "translateY( "+translateResult+"px)"
	// 	});
	// } 
	if(isTablet()){
		var translateResult = 100*ratio
		jq('.position--two').css({
			transform: "translateY( "+translateResult+"px)"
		});
		jq('.position--one').css({
			transform: "translateY( "+translateResult+"px)"
		});
	}
	if(isMobile()){
		var translateResult = 60*ratio
		jq('.position--two').css({
			transform: "translateY( "+translateResult+"px)"
		});
		jq('.position--one').css({
			transform: "translateY( "+translateResult+"px)"
		});
	}
	if(isDesktop()){
		var translateResult = 250*ratio
		jq('.position--two').css({
			transform: "translateY( "+translateResult+"px)"
		});
		jq('.position--one').css({
			transform: "translateY( "+translateResult+"px)"
		});
	}
}

function isVisible(el,scroll) {
    var elementTop = el.offset().top;
	var elementBottom = elementTop + el.outerHeight();
	var viewportTop = scroll;
	var viewportBottom = viewportTop + jq(window).height();
	return (elementTop > viewportTop) && (elementBottom < viewportBottom);
}


function init() {
    socialNetworksSharing();
    setTimeout(function(){
    	jq('.logo-el-confidencial').css('z-index', '102')
    }, 10000)
}

function scrollSocialNetworks() {
	var desktopSocialNetworks = jq(".aside");
	var mobileSocialNetworks = jq(".share-container");
	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
	if (scrollTop > 63){
		mobileSocialNetworks.addClass('visible');
		desktopSocialNetworks.addClass('visible');
	} else {
		mobileSocialNetworks.removeClass('visible');
		desktopSocialNetworks.removeClass('visible');
	}
}
function getWidth(){
	var imageSize =  windowWidth / 2;

	jq('.img-animation').css('width', imageSize+'px')
}
function getHeight(){
	var imageSize =  windowHeight / 3;
	jq('.img-animation').css('height', imageSize+'px')
}
function scrollActiv(){  
	var scrollPercent = getScrollPercent();
	if ( scrollPercent >= 25 ) {
	    	if ( !scroll25 ) {
	    		universalGa('brands.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 25%');
          	    universalGa('t1.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 25%');
	    		scroll25 = true;
	    	}
	    }
	    if ( scrollPercent >= 50 ) {
	    	if ( !scroll50 ) {
	    		universalGa('brands.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 50%');
          		universalGa('t1.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 50%');
	    		scroll50 = true;
	    	}
	    }
	    if ( scrollPercent >= 75 ) {
	    	if ( !scroll75 ) {
	    		universalGa('brands.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 75%');
          		universalGa('t1.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 75%');
	    		scroll75 = true;
	    	}
	    }
	    if ( scrollPercent >= 100 ) {
	    	if ( !scroll100 ) {
	    		universalGa('brands.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 100%');
          		universalGa('t1.send', 'event', 'Especial Movistar - 2ª temporada de La Peste', 'scroll', 'Scroll Depth 100%');
	    		scroll100 = true;
	    }
	}
}

function getScrollPercent() {
	var bottom = jq(window).height() + jq(window).scrollTop();
	var height = jq(document).height();
	return Math.round(100*bottom/height);
}


function socialNetworksSharing() {
	var urlPage = window.location.href;
	jq('.share-fb').each(function(){
	var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage;
        jq(this).attr('href',fbHref);
    });
    jq('.share-tw').each(function(){
        var tuitText = encodeURI(jq(this).data('text'));
        var tuitHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+tuitText+"&original_referer="+urlPage;
        jq(this).attr('href',tuitHref);
    });
    jq('.share-lk').each(function(){
        var lkText = encodeURI(jq(this).data('text'));
        var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source=";
        jq(this).attr('href',lkHref);
    });
    jq('.share-wa').each(function(){
        var waText = encodeURI(jq(this).data('text'));
        var waHref = "https://api.whatsapp.com/send?text="+waText+" "+urlPage;
        jq(this).attr('href',waHref);
    });
}


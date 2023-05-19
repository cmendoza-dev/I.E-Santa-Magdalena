
ScrollReveal().reveal('.footer-content');
ScrollReveal().reveal('.blog', {delay: 500});
ScrollReveal().reveal('.grillas', {delay: 500});
ScrollReveal().reveal('.grid', {delay: 500});

$(document).ready(function(){
    var altura = $('.subbarra').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > altura){
            $('.subbarra').addClass('subbarra-fixed');

        }else{
            $('.subbarra').removeClass('subbarra-fixed')
        }
    })
})


/*Boton ir hacia arriba*/

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

	/*Ocultar barra de navegacion en index*/
	$('.social2').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.social2').slideDown(300);
		} else {
			$('.social2').slideUp(300);
		}
	});

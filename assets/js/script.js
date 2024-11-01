
$(document).ready(function(){
	$('.header--nav-toggle').click(function(){
		
		$('.perspective').addClass('perspective--modalview');
		setTimeout(function(){
			$('.perspective').addClass('effect-rotate-left--animate');
		}, 25);
		$('.outer-nav, .outer-nav li, .langLink , .outer-nav--return').addClass('is-vis');
		
	});
})

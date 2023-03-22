$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() >= 20) {
			$('.header').css('height', '60px');
			$('.header').css('background', 'rgba(16, 16, 29, 1.0)');
		} else {
			$('.header').css('height', '100px');
			$('.header').css('background', 'rgba(16, 16, 29, 0.9)');
		}
	})


	$('.register-order-form_value').click(function() {
		$('.register-order-form_select').toggleClass('active');
	})


	$("#register-range").slider({
        animate: "slow",
        range: "min",
		min: 0,
		max: 100,    
        value: 50,
        slide : function(event, ui) {    
            $("#range-percent").text(ui.value + '%');        
        }
    });
    $( "#range-percent" ).text($( "#register-range" ).slider( "value" ) + '%');




    $('.header_burger').click(function() {
    	$('.header_burger').toggleClass('active');
    	$('.fix-bar').toggleClass('active');
    })
})
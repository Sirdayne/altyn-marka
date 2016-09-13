$(document).ready(function() {
    
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		console.log(th);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),

		}).done(function() {
            
            if (localStorage.language == "english"){
                $('.modal-back').fadeIn('fast');
                $('.thx-en').fadeIn('fast');
            }
            else{
                $('.modal-back').fadeIn('fast');
                $('.thx-ru').fadeIn('fast');
            }
            
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
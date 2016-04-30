$(document).on('ready page:load', function() {
	

	// Change menu class when scrolling //

	$(window).scroll( function() {
		var st = $(this).scrollTop();
		if(st >= 300) {
			$(".navbar").addClass("nav-scrolled");
			$(".projectName").removeClass("hidden");

		}
		else
		 {
			$(".navbar").removeClass("nav-scrolled");
			$(".projectName").addClass("hidden");

		}

	});


	// Works ==> show and hide the info div //
	$(".info").hide();
	$(".work-outer").mouseover(function(){
		$(".info",this).fadeIn(300);
		$(".work",this).addClass("blur");


	}).mouseleave(function(){
		$(".info",this).fadeOut(300);
		$(".work",this).removeClass("blur");


	});

});
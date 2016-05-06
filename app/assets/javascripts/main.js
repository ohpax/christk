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
	$(".project-outer").mouseover(function(){
		$(".info",this).fadeIn(300);
		$(".project",this).addClass("blur");


	}).mouseleave(function(){
		$(".info",this).fadeOut(300);
		$(".project",this).removeClass("blur");
	});

	// Centering images in posts

	$(".post img").parents('p').css("text-align", "center");

});


<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Comfortaa::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>
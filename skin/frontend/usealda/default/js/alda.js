$j(document).ready(function () {

	var pathname = window.location.pathname;
	
	if(pathname!='/'){
		$j('#header').addClass('navbar-fixed');
		$j('.nav-primary a').addClass('nav-primary-dark');
		$j('#logoheader').addClass('logo-header-dark');
		$j('.skip-link').addClass('skip-link-dark');
		$j('.page-header-container').css('border-bottom', '1px solid #dab988');		
	}

	$j(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		
		//console.log($j(window).scrollTop())

		if(pathname=='/'){

			if ($j(window).scrollTop() > 70) {
				$j('#header').addClass('navbar-fixed');
				$j('.nav-primary a').addClass('nav-primary-dark');
				$j('#logoheader').addClass('logo-header-dark');
				$j('.skip-link').addClass('skip-link-dark');
			}

			if ($j(window).scrollTop() < 71) {
				$j('#header').removeClass('navbar-fixed');
				$j('.nav-primary a').removeClass('nav-primary-dark');
				$j('#logoheader').removeClass('logo-header-dark');
				$j('.skip-link').removeClass('skip-link-dark');
			}
		}
	});

});
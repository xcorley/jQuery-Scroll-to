$(document).ready(function() {
		$(".clicker").click(function(){
			$(this).toggleClass("active");
			$(this).next(".wpcf7").stop('true','true').slideToggle("slow");
		});
		$(".menu-contact").click(function conscroll(){
			$(".clicker").toggleClass("active");
			$(".wpcf7").stop('true','true').slideToggle(1000);
      var scrollwait=setInterval(function(){conscroll()},2001);
      if ($(".wpcf7").is(':visible')) {
     $("html, body").animate({scrollTop: $("#contact").offset().top});
      clearInterval(scrollwait);
    }
  });
});

$(document).ready(function() {
		$(".clicker").click(function(){
			$(this).toggleClass("active");
			$(this).next(".target").stop('true','true').slideToggle("slow");
		});
		$(".menu-contact").click(function conscroll(){
			$(".clicker").toggleClass("active");
			$(".target").stop('true','true').slideToggle(1000);
      var scrollwait=setInterval(function(){conscroll()},2001);
      if ($(".target").is(':visible')) {
     $("html, body").animate({scrollTop: $("#contact").offset().top});
      clearInterval(scrollwait);
    }
  });
});

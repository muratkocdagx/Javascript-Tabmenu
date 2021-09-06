$(document).ready(function(){

	//$(".tab_content div:first").show();

	//birinci yol
	/*
	$(".tab li").click(function(){
		var $indis=$(this).index();
		$(".tab_content div").hide();
		$(".tab_content div:eq("+ $indis + ")").show();
		$(".tab li").removeClass("active");
		$(".tab li:eq("+ $indis + ")").addClass("active");
	});
	*/
	$(".tab li").click(function(){
		var $tab_content = $(this).attr("rel");
		var $indis=$(this).index();

		$(".tab_content div").hide();
		$($tab_content).fadeIn();
		
		$(".tab li").removeClass("active");
		$(".tab li:eq("+ $indis + ")").addClass("active");

	});
});

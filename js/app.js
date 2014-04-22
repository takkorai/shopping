$(document).ready(function(){
	$(".item_submit").click(function(){
		//var x=$(".item_text")
		event.stopPropagation();
		$( ".first" ).prepend( "<li>test</li>" );
	});


});
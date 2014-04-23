$(document).ready(function(){
	$(".item_submit").click(function(event){
		console.log('clicked');
		event.preventDefault();
		var x=$(".item_text").val();

		$( ".list" ).prepend( "<li>"+x+"</li>");
	});


});s
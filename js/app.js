$(document).ready(function(){
	$(".item_submit").click(function(event){
		event.preventDefault();
		var x=$(".item_text").val();
		if(x==""){
			alert("please enter an item")
		}
		else{
			$(".first").hide();
			$('<li class="item">'+'<div class="check"></div>'+'<div class="indiv_item">'+x+'</div>'+'<div class="delete"></div></li>').hide().prependTo( ".list" ).slideDown("slow");
			//$( ".list" ).prepend('<li class="item">'+'<div class="check"></div>'+'<div class="indiv_item">'+x+'</div>'+'<div class="delete"></div></li>').slideDown(slow);
		}

		
		$(".check").click(function(){
			$(this).closest("li.item").find(".indiv_item").addClass("checked");
			$(this).closest("li.item").addClass("checked");
		});

		$(".delete").click(function(){

			$(this).closest("li.item").hide();
		});


	});




});


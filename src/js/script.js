$(document).ready(function(){
    $(".close").click(function(){
		$(".component-container").slideUp();
		$(".popover").hide();
	});
	$( ".add-section-container" ).on({
  mouseenter: function() { 
    $( this ).addClass( "hover" );
  },
  mouseleave: function () {
    $( this ).removeClass( "hover" );
  }
});
	
});

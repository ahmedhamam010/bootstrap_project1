$( function(){
	 $(window).scroll( function(){
		if( $(this).scrollTop() > 200 ){
			$("nav").css("background" , "#ffc107");
			$("::placeholder").css("color","#fff");
			$(".my-navbar").css("border" , "none");
		}else{
			$("nav").css("background" , "transparent");
			$(".my-navbar").css("borderBottom" , "1px solid #39353e");			
		}

	} ) ;
} )
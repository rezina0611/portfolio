$(document).ready(function(){
	if($("#nav").length > 0){ gnb(); }
});


var gnb = function(){
	
	$gnb = $("#nav"),
	$dep1 = $gnb.find("> li"),
	$dep2 = $dep1.find("li.depth2"),

	$dep1.children("a").on("mouseenter", function(){   
		var $ul = $(this).next("ul.depth");
		$("#nav > li > a").removeClass("active");
		$(this).addClass("active");
		//if( $ul.is(":animated") ) return ;
		$ul.show();
	});

	$dep2.children("a").on("mouseenter", function(){   
		var $ul = $(this).next("ul");
		$dep2.removeClass("active");
		$(this).addClass("active");
		//if( $ul.is(":animated") ) return ;
		$ul.show();
	});
	

	$dep1.on("mouseleave", function(){
		$(this).find("ul").hide();
	});

	$dep2.on("mouseleave", function(){
		$dep1.find("a").removeClass("active");
		$(this).find("ul").hide();
		
	});


}




jQuery(document).ready(function($){
	var mainHeader = $('.gnb-area'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});

//LOADER
$('.loading-btn').on('click', function(e){
  $('#loading-overlay').toggle();
 // $(this).hide();
})

var loading_mask = {
      open: function(){
    	  $('#loading-overlay').show();
      },
      close: function(){
    	  $('#loading-overlay').hide();
      }
}

var file_download = {
	
	excel: function(params, actionName, downFileName){
		
		loading_mask.open();

    	fnObj.disableClear();
    	
    	var request = new XMLHttpRequest();
    	
    	request.open('POST', actionName, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.responseType = 'blob';
		
		request.onload = function(e) {
			
		    if (this.status === 200) {
		        var blob = this.response;
		        if(window.navigator.msSaveOrOpenBlob) {
		            window.navigator.msSaveBlob(blob, downFileName);
		        } else{
					var downloadLink = window.document.createElement('a');
		                var contentTypeHeader = request.getResponseHeader('Content-Type');
		                downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: contentTypeHeader }));
		                downloadLink.download = downFileName;
		                document.body.appendChild(downloadLink);
		                downloadLink.click();
		                document.body.removeChild(downloadLink);
		       }
	       }
		    
		   fnObj.defaultSetting();
	       loading_mask.close();
	       
	   };
	   
		request.send(params);
		
		request = null;
	}
}

var file_download_normal = {
	
	excel: function(params, actionName, downFileName){
		
		loading_mask.open();
    	
    	var request = new XMLHttpRequest();
    	
    	request.open('POST', actionName, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.responseType = 'blob';
		
		request.onload = function(e) {
			
		    if (this.status === 200) {
		        var blob = this.response;
		        if(window.navigator.msSaveOrOpenBlob) {
		            window.navigator.msSaveBlob(blob, downFileName);
		        } else{
					var downloadLink = window.document.createElement('a');
		                var contentTypeHeader = request.getResponseHeader('Content-Type');
		                downloadLink.href = window.URL.createObjectURL(new Blob([blob], { type: contentTypeHeader }));
		                downloadLink.download = downFileName;
		                document.body.appendChild(downloadLink);
		                downloadLink.click();
		                document.body.removeChild(downloadLink);
		       }
	       }
		    
		   loading_mask.close();
	       
	   };
	   
		request.send(params);
		
		request = null;
	}
}
















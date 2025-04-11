$(function(){

	//팝업공통  (a태그로 링크연결 - 1페이지에 2개이상 팝업을 뛰울때)
	$(".openPopup").on("click", function(e) { 
    	e.preventDefault();
    	var targetID = $(this).attr("data-target");
    	//var winWidth = $(window).width();
    	$(".mask").fadeIn(150);
    	$(".modal-content").removeClass("opened");
    	$("#" + targetID).addClass("opened");

    	setTimeout(function() {

        $(".modal").attr("tabindex", "0").show();
        // if (winWidth < 768) {
        //   $(".modal").height(winHeight - 40)
        //     .addClass('phoneSize');
        // }
      }, 150);
	});

	$(".close, #close").on("click", function(e) {
		e.preventDefault();
		//var winWidth = $(window).width();
		var targetID = $(".modal-content.opened").attr("id");
		$(".modal-content").removeClass("opened");
		$(".modal").hide();
		//$(".modal").removeClass('phoneSize');
		$(".mask").fadeOut(150);

		setTimeout(function() {
	    $(".openLayerPopup").each(function() {
	    if ($(this).attr("data-target") == targetID) {
	          $(this).focus();
	        }
	    });
	      $(".modal").removeAttr("tabindex");
	    }, 150);
	});


	//MY 권한
	$("#header .info > a").click(function() {
		if($(this).hasClass('off')){
			$(this).removeClass('off').addClass('on');
			//$(this).attr("title", "닫기");
			$("#header .info ul").slideDown(300);
		}else{
			$(this).removeClass("on").addClass("off");
			//$(this).attr("title", "펼치기");
			$("#header .info ul").slideUp(300);
		};
		return false;
	});


	//상단메뉴 
	$(".gnb .depth1 > li > a").on("mouseenter focus",function(){
		$(".gnb .depth1 > li").removeClass('on');
		$(".gnb .depth1 > li > .depth2").hide();

		$(this).parent("li").addClass("on");
		$(this).next(".depth2").stop().show();
	});	

	$(".gnb").on("mouseleave blur",function(){
		$(".gnb .depth1 > li").removeClass('on');
		$(".gnb .depth1 > li > .depth2").hide();
	});

	//2depth => 3depth3
	// $(".gnb .depth1 > li > .depth2 > li.dep_t > a").on('mouseenter', function() {
	// 	$(".depth3").hide();
	// 	$(this).next('.depth3').stop().show();
	// });


	$(".depth2").children().hover(function() { 
	    $(this).find("ul").show(); 
	}, function() { 
	    $(this).find("ul").hide(); 
	});




	// $(".depth2").mouseenter(function() {
	// 	$('.depth1 > li').removeClass('on');
	// 	$(this).parent('li').addClass('on');
	// });



  /*왼쪽메뉴*/
  $(".gside > ul > li > a").each(function() {
		$(this).click(function(e) {
			if ( $(this).parent().hasClass("nochild") ) {
					 $(this).addClass("on");
					 $(".gside > ul > li.nochild > a").not($(this)).removeClass("on");
					 $(".gside a.on + ul").slideUp(150);
					 
			} else {
				
				if ( $(this).hasClass("on") ) {
				     $(this).next("ul").slideUp(150).end().removeClass("on");
				     
				} else {
					e.preventDefault();
					$(".gside a.on + ul").slideUp(150);
					$(".gside > ul > li > a").removeClass("on");
					$(this).next("ul").slideDown(150).end().addClass("on");
				}
			}
		});
	});


    $(".gside > ul > li > ul > li > a").on("click", function() {
    	$(this).addClass("on").stop();
    	$(".gside > ul > li > ul > li > a").not($(this)).removeClass("on");
    });
    


 	//파일찾기
 	var fileTarget = $('.filebox .upload-hidden'); 

 	fileTarget.on('change', function(){ // 값이 변경되면 
 		if(window.FileReader){ // modern browser 
 			var filename = $(this)[0].files[0].name; 
 		} 
 		else { // old IE 
 			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
 		} 


 		// 추출한 파일명 삽입 
 		$(this).siblings('.upload-name').val(filename); 
 	});


 	/*인사복무에 사용한 달력*/
 	//시작일
	    $( ".datepicker01" ).datepicker({
		    //showOn: "button",
		    //showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
				dateFormat: 'yy-mm-dd',  // 텍스트 필드에 입력되는 날짜 형식.
		    	changeYear: true,  // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
				monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ] ,  // 월의 한글 형식.
				dayNames: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],  // 요일의 한글 형식.
				dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
				weekHeader: '주',
				yearSuffix: '년',
				yearRange: '1900:2050',  //연도 범위
				showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다.
				//buttonImage: "./images/ico_calender.gif",  // 버튼 이미지
		    buttonImageOnly: true,   // 버튼에 있는 이미지만 표시한다.
		    buttonText: "시작일 달력"
	    });
	  } );


	  $( function() {
	  	//종료일
	    $( ".datepicker02" ).datepicker({
	    	//showOn: "button",
	    	//showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
				dateFormat: 'yy-mm-dd',  // 텍스트 필드에 입력되는 날짜 형식.
		    	changeYear: true,  // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
				monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ] ,  // 월의 한글 형식.
				dayNames: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],  // 요일의 한글 형식.
				dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
				weekHeader: '주',
				yearSuffix: '년',
				yearRange: '1900:2050',  //연도 범위
				showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다.
				//buttonImage: "./images/ico_calender.gif",  // 버튼 이미지
		    buttonImageOnly: true,   // 버튼에 있는 이미지만 표시한다.
		    buttonText: "종료일 달력"
	    });

	    //초기값을 오늘 날짜로 설정
        $('#datepicker01, #datepicker02').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)

});

$(function(){

	// 관련사이트 바로가기 //
	var selectTarget = $('.selectbox select'); selectTarget.change(function(){ var select_name = $(this).children('option:selected').text(); $(this).siblings('label').text(select_name); });

	//푸더 배너 슬라이드
    $(".bn_wrap").slick({
        slidesToShow: 5,		//화면에 보여질 이미지 갯수
        slidesToScroll: 1,		//스크롤시 이동할 이미지 갯수
        autoplay: false,			//자동슬라이드
        autoplaySpeed:4000,		//자동실행시간치
        //variableWidth: true,		//width 크기가 서로 다르다는 것을 알림.
    });     	
    $('.bn_control a').click(function(e){
        e.preventDefault();
        $this = $(this);
        slickControl($this, '.bn_wrap','#bnStop','#bnPlay');
    });
    slickACCES($('.banner_zone')); 


	//메인 바로가기 배너 
	$('.pop_wrap').slick({
		slidesToShow: 1,		//화면에 보여질 이미지 갯수
		slidesToScroll: 1,		//스크롤시 이동할 이미지 갯수
		autoplay: true, 		//자동슬라이드
		autoplaySpeed: 4000,	//자동실행시간치
		dots: false,			//페이지 버트(하단에 주로 삽입)
	});
	$('.pop_control a').click(function(e){
        e.preventDefault();
        $this = $(this);
        slickControl($this, '.pop_wrap','#popStop','#popPlay');
    });   
	slickACCES($('.popup_box')); //190926

	/****
	    ------------------------- slick 접근성 -------------------------
	    slick의 버튼이 prev , control(play,stop), next 순서로 있을떄 웹 접근성 JS
	    사용방법 : 
	    slick, slickControl 실행 후 하단에
	    slickACCES(div); 입력
	    ----------------------------------------------------------------
	****/ 
	function slickACCES(div){ // div -> 전체를 감싸는 class

	    $div  = div;
	    $control = $div.find('div[class*=control]'); //control box(play, stop 버튼) 찾기
	    $btnPrev = $div.find('.slick-prev'); // prev 버튼 찾기
	    $btnNext = $div.find('.slick-next'); // next 버튼 찾기 

	    $control.insertAfter($btnPrev); //control box를 prev 버튼 뒤로 이동
	    $btnNext.insertAfter($control); //next 버튼을 control box 뒤로 이동

	}

	// 슬라이드 컨트롤
	function slickControl($this, slick, stop, play){
	    $slick = $(slick); //slider wrap
	    $stop = $(stop); //Stop Button
	    $play = $(play);//Play Button

	    if($this.is(stop)){
	        $stop.css('display','none');
	        $play.delay(100).css('display','block');
	        $slick.slick('slickPause');
	        console.log('정지');
	    }
	    if($this.is(play)){
	        console.log('재생');
	        $play.css('display','none');
	        $stop.delay(100).css('display','block');
	        $slick.slick('slickPlay');
	    }
	}


	//모바일 메인 서비스 
	var mySlider = $('.main_service').bxSlider( {
		mode: 'horizontal',// 가로 방향 수평 슬라이드
		speed: 1000,        // 이동 속도를 설정
		pager: true,      // 현재 위치 페이징 표시 여부 설정
		moveSlides: 1,     // 슬라이드 이동시 개수
	    slideWidth: 0,   // 슬라이드 너비
	    minSlides: 1,      // 최소 노출 개수
	    maxSlides: 1,      // 최대 노출 개수
	    slideMargin: 10,    // 슬라이드간의 간격
	    auto: false,        // 자동 실행 여부
	    autoHover: false,   // 마우스 호버시 정지 여부
	    controls: false    // 이전 다음 버튼 노출 여부
	});

	//var h_load =$(document).outerHeight();
		//$('#loadingBg').css('height', h_load);

	//pc상단메뉴 
	$(".depth1_ul > li").on("mouseenter",function() {
		$(".sub_2depth").hide();
		$(".depth1_ul > li").removeClass('on');
		$(this).addClass('on');
		$(this).children().next().show();
	});
	$(".depth1_ul > li").on("mouseleave",function() {
		$(".sub_2depth").hide();
		$(this).removeClass('on');
	});

	$(".depth1_ul > li > a").focusin("mouseenter",function() {  //요소에서 포커스가 들어왔을때
		$(".depth1_ul > li").removeClass('on');
		$(".sub_2depth").hide();
		$(this).parent().addClass('on');
		$(this).next().show();
	});

	/*$(".depth1_ul > li > a.last .sub_2depth .item .depth2_ul > li:last-child > a").focusout("mouseleave",function() {  //요소에서 포커스가 벗어났을때 
		$(".depth1_ul > li").removeClass('on');
		$(".sub_2depth").hide();
	});*/


	$(".depth2_ul > li:last").focusout(function(){
		$(".depth1_ul > li").find(".sub_2depth").stop().fadeOut(0);
		$(".depth1_ul > li").removeClass('on');
	});



	//모바일메뉴
	$(".depth2_ul > li > a").on("mouseenter focus",function(){
		$(".depth2_ul > li > a").removeClass("on");
		$(this).addClass("on");
	});

	$(".depth3_ul > li > a").on("mouseenter focus",function(){
		$(".depth3_ul > li > a").removeClass("on");
		$(this).addClass("on");
	});


	//통합검색
	$(".search_open").click(function(){
		$(".total-search").fadeIn();
	    $("html").addClass("all-scrollFixed");
	});
	$(".total-search .btn-close").click(function()
	{
		$("html").removeClass("all-scrollFixed");
		$(".total-search").fadeOut();
		$('#btn_search').focus();
	});


	//사이트맵 pc 데스크탑에서는 사이트맵, 모바일에서는  사라짐
	$(".allmenu-open").click(function(){
		$(".allmenu-wrap").fadeIn();
	    $("html").addClass("all-scrollFixed");
	    $("#wrap").append("<div class='mask'></div>");
	    
	});

	$(".allmenu-close").click(function(){
		$("html").removeClass("all-scrollFixed");
		$(".allmenu-wrap").fadeOut();
		$(".mask").remove();
	});

	/*모바일메뉴열려진 상태에서 PC용버전으로 가면 모바일 메뉴 닫힘*/
	$(window).resize(function() {  //resize 창의 크기를 변경시킬때 사용
		var winWidth = $( window ).width();
		if(winWidth > 1024) {   //윈도우 창이 1024보다 클때  
			//$('.dimed').remove();  //.dimed 클래스를 제거(삭제)하라
			$('.mask').hide();  //.dimed 클래스를 감추다
			$("html").removeClass("all-scrollFixed");
			$(".allmenu-wrap").fadeOut();
		}
	});

	//모바일 메뉴
	var speed = 350;
	$(".mobile-open").click(function(event) { 
		$(".mobile-wrap").animate({right: "0"}, speed);
		$("#wrap").after("<div class='mask'></div>");
	});

	$(".mobile-close").click(function(event) { 
		$(".mobile-wrap").animate({right: "-100%"}, speed);
		$('.mask').remove();
	});

	//1뎁스에서 2뎁스 메뉴 나오게 하는 소스
	$(".mobile-wrap .all-nav > li > a").click(function(){
		$(this).next().slideToggle(300);
		$(this).addClass('on');
		$('.mobile-wrap .all-nav .depth2 > li > a').addClass('on');
		// $(this).next().slideDown(300);
		$(".mobile-wrap .all-nav > li > a").not(this).next().slideUp(300);
		$(".mobile-wrap .all-nav > li > a").not(this).removeClass('on');

	});

	//2뎁스에서 3뎁스 메뉴 나오게 하는 소스
	$(".mobile-wrap .all-nav .depth2 > li > a").click(function(){
		$(this).next().slideToggle(300);
		// $(this).next().slideDown(300);
		$(".mobile-wrap .all-nav .depth2 > li > a").not(this).next().slideUp(300);
	});

	//side
	$(".side > ul > li > a").click(function(){
		$(this).next().slideToggle(300);
		$(this).addClass('on');
		//$(this).next("ul").slideUp(300).end().removeClass("on");;
		//$(this).next("ul").slideDown(300).end().addClass("on");

		$(".side > ul > li > a").not(this).next().slideUp(300);
		$(".side > ul > li > a").not(this).removeClass('on');
	});

	$('.side > ul > li > ul > li a').click(function(){
		$('.side > ul > li > ul > li a').not(this).removeClass('on');
		$(this).addClass('on');
		
	});

	/*$('.side > ul > li a.on > ul > li a').click(function(){
		$('.side > ul > li a.on > ul > li a').not(this).removeClass('on');
		$(this).addClass('on');
		
	});*/


	// Selectbox
	$('.selectBox select').each(function() {
		var sel_text = $(this).find('>option:selected').text();
		//$(this).prev().empty().text(sel_text);
		$(this).parent().find("span").empty().text(sel_text); 
	});
		
	$(document).on('change', '.selectBox select', function() {
		var sel_text = $(this).find('>option:selected').text();
		//$(this).prev().empty().text(sel_text);
		$(this).parent().find("span").empty().text(sel_text); 
		
	});
	$(document).on('focus', '.selectBox', function() {
		$(this).addClass('focus');
	});
	$(document).on('blur', '.selectBox', function() {
		$(this).removeClass('focus');
	});

	//qnq 자주묻는잘문
	$(".faqList dl dt a").on("click", function() {
		if($(this).parent().next().css("display") == "none") {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dd").slideUp(150);

			$(this).addClass('on');
			$(this).attr('title', '답변닫기');
			$(this).parent().next().slideDown(150);
		} else {
			$(".faqList dl dt a").removeClass('on');
			$(".faqList dl dt a").attr('title', '답변보기');
			$(".faqList dl dd").slideUp(150);
		}
	});

	//경영공시
	$(".statusList dl dt a").on("click", function() {
		if($(this).parent().next().css("display") == "none") {
			$(".statusList dl dt a").removeClass('on');
			$(".statusList dl dd").slideUp(150);

			$(this).addClass('on');
			$(this).attr('title', '현황닫기');
			$(this).parent().next().slideDown(150);
		} else {
			$(".statusList dl dt a").removeClass('on');
			$(".statusList dl dt a").attr('title', '현황열기');
			$(".statusList dl dd").slideUp(150);
		}
	});

});
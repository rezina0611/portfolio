$(document).ready(function () {

	// 관련사이트 바로가기 //
	//var selectTarget = $('.selectbox select'); selectTarget.change(function(){ var select_name = $(this).children('option:selected').text(); $(this).siblings('label').text(select_name); });

	$('.footer_links a.tit').on('click',function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			if($target.is('a')){
				$(this).removeClass('on').next('.cont_box').slideUp(300);
			}else{
				$(this).parents('a.tit').removeClass('on').next('.cont_box').slideUp(300);
				//$(".selectbox a").attr("title","관련사이트 바로가기 목록 닫기");
			};
		}else{
			$('.footer_links a.tit').removeClass('on').next('.cont_box').slideUp(300);
			if($target.is('a')){
				$(this).addClass('on').next('.cont_box').slideDown(300);
			}else{
				$(this).parents('a.tit').addClass('on').next('.cont_box').slideDown(300);
			};			
		};
		return false;
	});
	$('.footer_links .cont_box li:last-child a').on('focusout',function(){
		$(this).parents('.cont_box').slideUp(300).prev('.tit').removeClass('on');
	});



	/*모바일메뉴열려진 상태에서 PC용버전으로 가면 모바일 메뉴 닫힘*/
	$(window).resize(function() {  //resize 창의 크기를 변경시킬때
		var winWidth = $( window ).width();	//윈도우 width 값을 변수선언
		if(winWidth > 1200) {   //윈도우 창 width값이 1200보다 클때 
			$('.dimed').hide();  //.dimed 클래스를 감추다 
			$('.gnavi_depth').hide();
		}
    });
    
    $(window).on('load resize', function(){	// 윈도우 창이 로드와, 창의 크기가 변경될때 
        calculateWidth();		//출력 형식을 위한 자릿수를 계산한다.
    })
   

    function calculateWidth(){		//calculateWidth 함수 선언
        var width = $(window).innerWidth();  //innerWidth - 안쪽여백을 포함해서 너비값 반환
        
        //console.log(width)
		if (width <= 1200) {	//1200 이하  <= 미만 연산자는 왼쪽 피연산자가 오른쪽 피연산자보다 작거나 같을 경우 참을 반환
            $('#gnavi').addClass('mobile');
		}else if(width > 1200) { //1200 이상 >= 이상 연산자는 왼쪽 피연산자가 오른쪽 피연산자보다 크거나 같으면 참을 반환
            $('#gnavi').removeClass('mobile');
		}
        
        gnbSelect();
    }
    
    function gnbSelect(){	//gnbSelect 함수 선언
        if($('#gnavi').hasClass('mobile')){
            
            //모바일메뉴
            var speed = 350;
            
            $('#gnavi').css({
                'right': '-240px',
                'opacity': 0
            })
            
            $('.dimed').hide();

            $('.gnavi_list li.gnavi > a').off('mouseenter');
            $('#gnavi').off('mouseleave');
            $('.gnavi_depth').off('mouseenter');

            $('#mn-ctrs-btns').click(function(){
                $('.dimed').fadeIn(speed);
                $('#gnavi').stop().animate({
                    'right': 0,
                    'opacity': 1
                }, speed)
            })

            $('.menu_close').click(function(){
                $('.dimed').fadeOut(speed);
                $('#gnavi').stop().animate({
                    'right': '-240px',
                    'opacity': 0
                }, speed, function(){
                    $('.gnavi_depth:visible').stop().slideUp();
                })
            })

            $('#gnavi .gnavi_list .gnavi > a').click(function(e){
                //e.preventDefault();
                e.stopImmediatePropagation();		//현재 이벤트가 상위뿐 아니라 현재레벨에 걸린 다른이벤트 동작중단
                var index = $(this).parent().index();

                if(index != 0){
                    $('.gnavi_depth:visible').stop().slideUp();
                    
                    if(index != $('.gnavi_depth:visible').parent().index()){
                        $('.gnavi_depth').eq(index-1).stop().slideDown();
                    }
                }

            })

            //$('.dimed').click(function(){
               // $('.menu_close').trigger('click');   //trigger() 강제로 이벤트 실행
            //})
            
            
        } else {
            
            //pc메뉴
            $('#gnavi').css({
                'right': 0,
                'opacity': 1
            })
            
            $('#gnavi .gnavi_list .gnavi > a').on("mouseenter",function(){
            //$('#gnavi .gnavi_list .gnavi > a').mouseenter(function(){
                $("#gnb_bg").addClass("open");
                $('#gnavi').addClass('active');
                $('.gnavi').removeClass('active');
                $(this).parent().addClass('active');
                $('.gnavi_depth').show();
                $('.dimed').show();
            })

            //키보드 접근성
            $('#gnavi .gnavi_list .gnavi > a').on("focus",function(){
            	$("#gnb_bg").addClass("open");
                $('#gnavi').addClass('active');
                $('.gnavi').removeClass('active');
                $(this).parent().addClass('active');
                $('.gnavi_depth').show();
                $('.dimed').show();
           	})


            $('#gnavi').mouseleave(function(){
                $("#gnb_bg").removeClass("open");
                $('#gnavi').removeClass('active');
                $('.gnavi').removeClass('active');
                $('.gnavi_depth').hide();
                $('.dimed').hide();
            })

            //키보드 접근성
            $('.gnavi .gnavi_depth a:last').on("focusout",function(){
            	$("#gnb_bg").removeClass("open");
            	$('.gnavi').removeClass('active');
            	$('.gnavi_depth').hide();
            	$('.dimed').hide();
            })


            $('#gnavi .gnavi_depth').mouseenter(function(){
                $('.gnavi').removeClass('active');
                $(this).parent().addClass('active');
            })
            
        }
    }
    
    
    
    
    
    
    
    
    
    


	/*$('#groupCompanyBtn').on('click', function(e) {
		var goUrl = $.trim($('#groupCompany option:selected').val());
		if(goUrl.length > 0) window.open(goUrl);
	});
	$('#relationCompanyBtn').on('click', function(e) {
		var goUrl = $.trim($('#relationCompany option:selected').val());
		if(goUrl.length > 0) window.open(goUrl);
	});*/


	$('.pop_wrap').bxSlider( {
		mode: 'horizontal',// 가로 방향 수평 슬라이드
		speed: 1500,        // 이동 속도를 설정 1000 = 1초
		pager: true,      	// 현재 위치 페이징 표시 여부 설정
		moveSlides: 1,     // 슬라이드 이동시 개수
		//slideWidth: 100, // 슬라이드 너비
		minSlides: 1,      // 최소 노출 개수
		maxSlides: 1,      // 최대 노출 개수
		//slideMargin: 1,    // 슬라이드간의 간격
		adaptiveHeight:true,  // 이미지 높이 자동조절
		auto: true,        // 자동 실행 여부
		autoHover: true,   // 마우스 호버시 정지 여부
		controls: true,    // 이전 다음 버튼 노출 여부
		autoControls: true, //재생 정지버튼 생성
		autoControlsCombine: true, //재생일때 클릭하면 정지로 바뀌고, 정지일때 클릭하면 재생으로 바뀜
		pager: true, 		//페이지 노출여부 (true : 노출)  
		pagerType: 'short', //페이지 idx / slide  length
		pagerShortSeparator : '<span> /'

	});

	$('.mainService > ul').slick({
		slidesToShow: 5,		//화면에 보여질 이미지 갯수
		slidesToScroll: 1,		//스크롤시 이동할 이미지 갯수
		autoplay: false, 		//자동슬라이드
		autoplaySpeed: 1500,	//자동실행시간치
		dots: false,			//페이지 버튼(하단에 주로 삽입)
		centerPadding: '0',		//중앙 보기 에서 padding 값으로 위치 조절 기본값은 "50px"
		centerMode: true,		//중앙 보기 기본값은 false
		focusOnSelect: true,	
		prevArrow: $("#prevBtn"),		//좌 화살표 변경, 선택자 or HTML
		nextArrow: $("#nextBtn"),		//우 화살표 변경, 선택자 or HTML
		responsive: [				//반응형 크기에 따른 재설정이 가능하도록 합니다. 오브젝트 형태로 선언
			{
				breakpoint: 1200,	/*  기준화면사이즈 */ 
				settings: {slidesToShow: 4,}	/*  사이즈에 적용될 설정 */
			},
			{
				breakpoint: 990,	/*  기준화면사이즈 */ 
				settings: {slidesToShow: 3,}
			},
			{	
				breakpoint: 768, /*  기준화면사이즈 */ 
				settings: {slidesToShow: 3,}
			},
			{	
				breakpoint: 540,	/*  기준화면사이즈 */ 
				settings: {slidesToShow: 2,}
			},
			{	
				breakpoint: 480,	/*  기준화면사이즈 */ 
				settings: {slidesToShow: 2,}
			}
		]
	});
	/*var mySlider = $('.mainService > ul').bxSlider( {
		mode: 'horizontal',// 가로 방향 수평 슬라이드
		speed: 500,
		pager: false,		// 현재 위치 페이징 표시 여부 설정 (true: 표시, false: 미표시)
		moveSlides: 1,      // 슬라이드 이동시 개수
		slideWidth: 190,    // 슬라이드 너비
		minSlides: 6,       // 최소 노출 개수
		maxSlides: 6,       // 최소 노출 개수
		slideMargin: 5,    // 슬라이드간의 간격
		auto: false,		// 자동 실행 여부
		controls: false    // 이전 다음 버튼 노출 여부
	});

	//이전 버튼을 클릭하면 이전 슬라이드로 전환
	$( '#prevBtn' ).on( 'click', function () {
		mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
		return false;              //<a>에 링크 차단
	});

	//다음 버튼을 클릭하면 다음 슬라이드로 전환
  	$( '#nextBtn' ).on( 'click', function () {
   		mySlider.goToNextSlide();   //다음 슬라이드 배너로 이동
   		return false;				//<a>에 링크 차단
  	});
  	});*/

});

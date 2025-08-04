//var fullpage;
$(function(){

	var anchorsAry = ['fsection01', 'fsection02', 'fsection03', 'fsection04','footerPage'];
	if($('body').hasClass('top_ban_none')){
		$('#section_header').remove();
		anchorsAry = ['fsection01', 'fsection02', 'fsection03', 'fsection04','footerPage'];
	}

	var pre;	//pre 변수선언
	var pre_a;	//pre_a	변수선언

	function fullpageFn(){

		var fullpage = $('#fullpage').fullpage({
			anchors: anchorsAry,		//각 구역별 URL에 보여질 앵커 링크(#예시)를 정의
			responsiveWidth: 1280,		//(기본값 0) 픽셀로 정의된 폭 아래에 정상 스크롤(autoScrolling:false)을 씁니다. 예를 들어 900에 설정되는 경우 브라우저의 너비가 900 미만이 될 때마다 플러그인이 정상 웹사이트처럼 스크롤됩니다.
			scrollingSpeed: 700,		//스크롤 속도를 1000분의 1초 단위로 정의 (1000분의 1초)
			fitToSection: true,			//(기본값 true) 구역을 모바일 지원(viewport)에 맞출지 말지를 결정
			fitToSectionDelay: 0,		// (기본값 1000) 1000분의 1초 단위로 맞춤을 지연
			scrollOverflow: true, 		//section in scroll		
			scrollBar: false,			//스크롤바 노출여부

			//접근성
			keyboardScrolling: true,    // 키보드 스크롤 사용
			animateAnchor:true,		

			menu: '#fullpage_nav',		//풀페이지의 이름
			//event
			onLeave:function(index, nextIndex, direction){		//페이지 이동할 때
			//onLeave: function(origin, destination, direction){   
			//onLeave 풀페이지가 전환되기 직전에 실행되는 콜백함수 (origin : 출발구역, destination:목적지 구역, direction: 스크롤하는 방향에 따라 up 또는 down)
				var k = 0;
				if(!$('body').hasClass('top_ban_none')){
					k = 1;
				}
				var s = k+nextIndex;

				if(s==1){
					$('#fullpage_nav').attr('class','color01');
				}else if(s==2){
					$('#fullpage_nav').attr('class','color02');
				}else if(s==3){
					$('#fullpage_nav').attr('class','color03');
				}else if(s==4){
					$('#fullpage_nav').attr('class','color04');
				}

				if(nextIndex == 1){
					$('#wrap').removeClass('lay_gnb_fixed'); 
					$('#header').removeClass('lay_fixed');

					//$('#header').removeClass('fixed');
					//$('#headTop_bnr').removeClass('none');
				}else{
					$('#wrap').addClass('lay_gnb_fixed');
					$('#header').addClass('lay_fixed');

					//$('#header').addClass('fixed'); 
					//$('#headTop_bnr').addClass('none');   
				}

			},
			afterLoad: function(anchorLink, index){
			//구역을 불러오고 나서 스크롤이 끝나면 콜백이 실행됩니다. 매개 변수: (origin : 활성화된 구역, destination:목적지 구역, direction: 스크롤하는 방향에 따라 up 또는 down)
				var tw = $(window).width();
				if(tw > 1200){   //변수 tw의 값이 1200 피연산자의 값보다 크면 참을 반환함.
					if(anchorLink!='header' && anchorLink!='footerPage'){   //!= 왼쪽 피연산자와 오른쪽 피연산자의 값이 같지 않으면 참을 반환함.   && 논리식이 모두 참이면 참을 반환함. (논리 AND 연산)

					}
					$('#fullpage_nav a').attr('aria-selected',"false");
					$('#fullpage_nav li.active a').attr('aria-selected',"true");

					if(pre>index){
						if(pre_a!='footerPage'){
							// $('.section.active .last').focus();
						}
					}else{
						// $('.section.active .first').focus();
					}
				    pre = index;
				    pre_a = anchorLink;
				}
			},

		});
	}
	$('.section').each(function(idx){
		var len = $(this).find('a').length;
		var id = $(this).attr('id');
		if(id!='footer_section' && id!='section01'){
			$(this).find('a').eq(0).addClass('first');
			$(this).find('a').eq(len-1).addClass('last');
		}
	});


	fullpageFn();
	$('#skip_nav').attr('href','#fullpage');  		//#skip_nav가 #fullpage으로 바꾼다 

	$(document).on('keydown',function(e){
		var tw = $(window).width();

		if(tw > 1200){
			var isLastFocus = $('.section.active .last').is(':focus');
			var isFirstFocus = $('.section.active .first').is(':focus');
			var idx;
			if(e.keyCode=='9'){
				if(e.shiftKey){
					//이전
					if(isFirstFocus){
						if($('.section.active').attr('id')!='section01'){
							e.preventDefault();
							idx = $('.section.active').index();
							$.fn.fullpage.moveTo(idx);
						}
					}
				}else{
					//다음
					if(isLastFocus){
						e.preventDefault();
						idx = $('.section.active').index()+2;
						if($('.section.active').attr('id')=='footer_section'){
							idx = 1;
						}
						$.fn.fullpage.moveTo(idx);
					}
				}
			}
		}

	});

	/*$('.btn_ftop').on('click',function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(1);
	});*/

});
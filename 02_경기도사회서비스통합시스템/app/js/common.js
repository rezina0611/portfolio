$(document).ready(function(){

    //PC, 모바일 토글메뉴 스크립트
    $('.menu').click(function(){
        $('body').toggleClass('fixed');
        return false;	
    });
    $('.menu-toggle').click(function(){
        $('body').removeClass('fixed');
        return false;
    });   


    //근로자 서명하기 팝업, 담당자 서명하기, 시설담당자 서명하기
    $('.trigger-info').on('click', function() {
        $('#modal-info').toggleClass('open');
        return false;
    });

    //본원담당자 서명하기
    $('.trigger-info3').on('click', function() {
        $('#modal-info3').toggleClass('open');
        return false;
    });

    //근로자 서명보기
    $('.trigger-info-view').on('click', function() {
        $('#modal-info2').toggleClass('open');
        return false;
    });


    //검색창
    $('.trigger-search').on('click', function() {
        $('#modal-search').toggleClass('open');
        return false;
    });


    $.datepicker.setDefaults($.datepicker.regional['ko']); //datepicker 한국어로 사용하기 위한 언어설정
    $('.datepicker01').datepicker();
    $('.datepicker02').datepicker();

    //오늘날짜 표시
    $("#search_day_from").datepicker().datepicker("setDate", new Date());

    $( ".datepicker01" ).datepicker({
        //showOn: "button",
        //showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
        dateFormat: 'yy-mm-dd',  // 텍스트 필드에 입력되는 날짜 형식.
        prevText: '이전 달',   // 마우스 오버시 이전달 텍스트
        nextText: '다음 달',   // 마우스 오버시 다음달 텍스트
        showButtonPanel:true,  // 캘린더 하단에 버튼 패널을 표시(오늘날자이동버튼, 닫기버튼)
        closeText: '닫기', // 닫기 버튼 텍스트 변경
        currentText: '오늘', // 오늘 텍스트 변경
        changeYear: true,  // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ], // 월의 한글 형식.
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],  // 요일의 한글 형식.
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        weekHeader: '주',
        yearSuffix: '년',
        showButtonPanel: true,  // 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
        yearRange: '1900:2050',  //연도 범위
        showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다.
        //buttonImage: "./images/ico_calender.gif",  // 버튼 이미지
        buttonImageOnly: true,   // 버튼에 있는 이미지만 표시한다.
        buttonText: "방문일 달력"
    });

});

//popup open 열기
function fnShowPop(sGetName){
    var layer = $("#"+ sGetName);
    layer.addClass("open");
}
    
//popup hide 닫기
function fnHidePop(sGetName){
    //var $layer = $("#"+ sGetName);
    $("#"+ sGetName).removeClass("open");

    $("details").removeAttr("open");
}

//모빌리티 노출 순서 변경 popup
//TR 위로 이동
function fnMoveUpTR(el){
    var $tr = $(el).parent().parent().parent();  // 클릭한 버튼이 속한 tr 요소
    $tr.prev().before($tr); // 현재 tr 의 이전 tr 앞에 선택한 tr 넣기
}

//TR 아래로 이동
function fnMoveDownTR(el){
    var $tr = $(el).parent().parent().parent(); // 클릭한 버튼이 속한 tr 요소
    $tr.next().after($tr);  // 현재 tr 의 다음 tr 뒤에 선택한 tr 넣기
}


function toggleAct(button) {
    button.classList.toggle('on');
    $(this).toggleClass('on');
    $(".robot-layer").toggleClass('open');
}

//전일, 최근7일, 최근30일, 최근1년 클릭하면 해당날짜 변경기능
function formatDate(date) {
    let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

function date_set(term){
    let date = new Date();
    let sdate, edate;

    if(term=='today'){
        //오늘날짜
        sdate = date;
        edate = date;
    }else if(term=='1'){
        //전일
        sdate = date.getTime() - (1 * 24 * 60 * 60 * 1000);
        edate = date;
    }else if(term=='7'){
        //최근 7일
        sdate = date.getTime() - (7 * 24 * 60 * 60 * 1000);
        edate = date;
    }else if(term=='30'){
        //최근 30일
        sdate = date.getTime() - (30 * 24 * 60 * 60 * 1000);
        edate = date;
    }else if(term=='365'){
        //최근 1년
        sdate = date.getTime() - (365 * 24 * 60 * 60 * 1000);
        edate = date;
    }

    $('.start_date').val(formatDate(sdate));
    $('.end_date').val(formatDate(edate));
}



window.onload = function() {
    today = new Date();
    today = today.toISOString().slice(0, 10);
    //console.log(today);
    $('.start_date').val(today);
    $('.end_date').val(today);
}

$(function(){
    //통계 - 전일, 최근7일, 최근30일, 최근1년
    $(".date-area .btn").each(function () {
        $(this).click(function(){
            $(this).addClass("on"); 
            $(this).siblings().removeClass("on");
        });
    });

    $("input[name=selectall]").click(function () {
        if ($("input[name=selectall]").prop("checked")) {
            $("input[name=mms]").prop("checked", true);
        } else {
            $("input[name=mms]").prop("checked", false);
        }
    });

    $("input[name=mms]").click(function() {
        let checkboxes = $("input[name=mms]");
        let checked = $("input[name=mms]:checked");

        if(checkboxes.length == checked.length){
            $("input[name=selectall]").prop("checked", true);
        }else{
            $("input[name=selectall]").prop("checked", false);
        }
    });

    let trCnt = $("#myTable01 tbody tr").length;

    if (trCnt < 6) {
        $("#table-th").css("width", "");
    } else {
        return false;
    }

    $(".accordion dl dt a").on("click", function() {
        if($(this).parent().next().css("display") == "none") {
            $(".accordion dl dt a").removeClass('on');
            $(".accordion dl dd").slideUp(150);
            $(this).addClass('on');
            $(this).parent().next().slideDown(150);
        } else {
            $(".accordion dl dt a").removeClass('on');
            $(".accordion dl dd").slideUp(150);
        }
    });
});

//[안함] 버튼 클릭 시 사용중 목록에서 삭제 후 사용안함 목록에 추가
//- 사용중 목록에 모빌리티 4개로 설정 시 버튼 비활성화 (사용중으로 추가 불가)
$(function(){

    //tr 갯수 구하기
    let row_count = $('#row-left tbody tr').length;
    console.log(row_count);
    $(".num").html(row_count);

    //만약 tr객수가 4개일 경우
    if ( row_count == 4 ) {
        $(".delBtn").prop("disabled", true);    //버튼 비활성화
    }else{  // 아니면 
        $(".delBtn").prop("disabled", false);  //버튼 활성화
    }

    $(".delBtn").click(function(){
        let clickedRow = $(this).parent().parent();
        clickedRow.remove();

        //현재 row의 정보 가져오기 
        let thisRow = $(this).closest('tr'); 
        let nameVal = thisRow.find('td:eq(2)').text();

        //let nameVal = $('#row-left tbody tr td:eq(2)').text();

        let innerHtml = '';
            innerHtml += '<tr>';
            innerHtml += '<td>'+ nameVal +'</td>';
            innerHtml += '<td><button class="btn gray">사 용</button></td>';
            innerHtml += '</tr>';

        $('#rowadd tbody:last').append(innerHtml);
    });

    
});


$(function(){
    /*비밀번호 눈모양 표시
    https://kutar37.tistory.com/entry/비밀번호-보기숨기기-기능구현
    https://jsfiddle.net/jmy59tod/1/
    $(document).on("click touchend", ".class1, .class2, .class3", function () {
     some_function();
     $('AAA, BBB, CCC').on('XXX', function () {
});
    */
    $('.eye i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            $(this).attr('class',"fa-regular fa-eye-slash eyes eyes").prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"fa-regular fa-eye eyes eyes").prev('input').attr('type','password');
        }
    });
});

$(function(){
    //알림
    $('.top-btns button').each(function(){
        $(this).click(function(){
            $(this).addClass("on"); 
            $(this).siblings().removeClass("on");
        });
    });

    $('.alarm-layer > .alarm-head .btn-close').click(function(){
        $('.top-btns button').removeClass("on");
    });

    
    /*상단 서브메뉴*/
    $("nav ul li a").each(function(){
        $(this).click(function(){
            $(this).addClass("on"); 

            $(this).siblings().removeClass("on");
        });
    });
});
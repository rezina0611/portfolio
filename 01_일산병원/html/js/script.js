
//사이드바 토글
$(function(){
     $(".collapseSide").on('click', function(){
        //사이드메뉴 폈을때
        if ($(".fz-side-wrapper").hasClass("collapse")){
            $(".fz-side-wrapper").removeClass("collapse");
            $('.fz-row.row .right').width('560px');

        }else {
            //사이드메뉴 접혔을때
            $(".fz-side-wrapper").addClass("collapse");
            $('.fz-row.row .right').width('710px');
        }
    });

    //만약 선택한 요소에 collapse 있으면 
    //해당 클래스에 width값 710px 생성
    //그렇지 않다면 width값 560px 생성
    if($('.fz-side-wrapper').hasClass('collapse')){
        $('.fz-row.row .right').width('710px');
    }else{
        $('.fz-row.row .right').width('710px');
    }
});


//popup open 열기
function fnShowPop(sGetName){
    var layer = $("#"+ sGetName);

    layer.addClass("open");
    $('.popup-dialog-mask').fadeIn(150);

    layer.draggable({
        handle : '.dialog-title' // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });
    
    
    // 화면의 중앙에 레이어를 띄운다.
    layer.css("top", ( $(window).height() - layer.height() ) / 2+$(window).scrollTop() + "px");
    layer.css("left", ( $(window).width() - layer.width() ) / 2+$(window).scrollLeft() + "px");
MM_showHideLayers(sGetName,'','show');

}
    
//popup hide 닫기
function fnHidePop(sGetName){
    var $layer = $("#"+ sGetName);

    $("#"+ sGetName).removeClass("open");
    $('.popup-dialog-mask').fadeOut(150);

    //$layer.css("top", "");
    //$layer.css("left", "");
    $layer.css({"top": "", "left": ""});
}

/*
style 속성 하나씩 바꿀때는 
.css("속성","값");
.css("속성","값");

style 속성 여러개를 바꿀때는
.css({"속성":"값", "속성":"값"});
*/


//권한그룹추가
function rowAdd() { //행 추가
    var trCnt = $('#myTable tr').length;

    if(trCnt < 11){
        var innerHtml ="";
        innerHtml += '<tr class="text-gray">';
        innerHtml += '<td>'+trCnt+'</td>';
        innerHtml += '<td class="text-left"><input type="text" class="input" value=""></td>';
        innerHtml += '<td><button class="button gray" onclick="rowDel(this);"><img src="./images/ico_trash@2x.png"></button></td>';
        innerHtml += '</tr>';

        $('#myTable > tbody:last').append(innerHtml);
    }else{
        alert("최대 10개까지만 가능합니다.");
        return false;
    }
}

function rowDel(obj) { //행 삭제
    $(obj).parent().parent().remove();
}


$(function(){
    /*비밀번호 눈모양 표시
    https://kutar37.tistory.com/entry/비밀번호-보기숨기기-기능구현
    https://jsfiddle.net/jmy59tod/1/*/
    $('.eye i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            $(this).attr('class',"fa fa-eye-slash fa-sm eyes")
            .prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"fa fa-eye fa-sm eyes")
            .prev('input').attr('type','password');
        }
    });
});


/*라디오버튼 탭메뉴
    구역관리, 수집데이터관리
*/
$(function(){
    $("input[name='sample_tab']").on('change', function() {

        //라디오버튼 선택시 <label>태그안에 있는 텍스트 가져오기
        var checkedVal = $("input[name='sample_tab']:checked").next().text();

        console.log(checkedVal);
        $(".space").html(checkedVal);
    });
});


$(function(){
    $("input:radio[name=self]").on('click', function() {
        var valueCheck = $('input[name=self]:checked').val();

        if( valueCheck == "no"){ 
            // radio 버튼의 value 값이 NO이라면 비활성화
            $("input:text[name=textbox]").attr("disabled",true);

        }else if(valueCheck == "yes"){
            // radio 버튼의 value 값이 Yes이라면 활성화
            $("input:text[name=textbox]").attr("disabled",false);
        }
    });

    //타해 발생여부
    $("input:radio[name=Tahae]").on('click', function() {
        var valueCheck = $('input[name=Tahae]:checked').val();

        if( valueCheck == "no"){ 
            // radio 버튼의 value 값이 NO이라면 비활성화
            $("input:text[name=textbox2]").attr("disabled",true);

        }else if(valueCheck == "yes"){
            // radio 버튼의 value 값이 Yes이라면 활성화
            $("input:text[name=textbox2]").attr("disabled",false);
        }
    });
});
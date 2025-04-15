
//popup open 열기
function fnShowPop(sGetName){
    var layer = $("#"+ sGetName);

    layer.addClass("open");
}
    
//popup hide 닫기
function fnHidePop(sGetName){
    //var $layer = $("#"+ sGetName);

    $("#"+ sGetName).removeClass("open");
}

//긴급알림 
function alarm(){
     $(".alarm-layer").toggleClass("open");
     return false;   
}

//권한그룹추가
// function rowAdd() { //행 추가
//     var trCnt = $('#myTable tr').length + 1;

//     if(trCnt <= 11){
//         var innerHtml ="";
//         innerHtml += '<tr>';
//         innerHtml += '<td>'+trCnt+'</td>';
//         innerHtml += '<td><input type="text" class="form-control"></td>';
//         innerHtml += '<td><button class="btn-delete" onclick="rowDel(this);" title="삭제"><img src="./images/ico_trash@2x.png"></button></td>';
//         innerHtml += '</tr>';

//         $('#myTable > tbody:last').append(innerHtml);
//     }else{
//         alert("최대 10개까지만 가능합니다.");
//         return false;
//     }
// }

// function rowDel(obj) { //행 삭제
//     $(obj).parent().parent().remove();
// }

/*통계- Robot 선택*/
function toggleAct(button) {
    button.classList.toggle('on');
    $(".robot-layer").toggleClass('open');
}

//체크박스 하단 선택 해제 시 전체선택 자동 해제
function checkSelectAll()  {
    // 전체 체크박스
    const checkboxes  = document.querySelectorAll('input[name="robot"]');
    // 선택된 체크박스
    const checked  = document.querySelectorAll('input[name="robot"]:checked');
    // select all 체크박스
    const selectAll = document.querySelector('input[name="selectall"]');
    if(checkboxes.length === checked.length){
        selectAll.checked = true;
    }else{
        selectAll.checked = false;
    }
}

//체크박스 전체 선택 / 전체 해제 구현
function selectAll(selectAll)  {
    const checkboxes 
        = document.getElementsByName('robot');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}


/*비밀번호 눈모양 표시
    https://kutar37.tistory.com/entry/비밀번호-보기숨기기-기능구현
    https://jsfiddle.net/jmy59tod/1/*/
$(function(){
    $('.eye i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            //$(this).attr('class',"fa-regular fa-eye-slash fa-lg eyes")
            $(this).attr('class',"fa-regular fa-eye-slash eyes eyes").prev('input').attr('type',"text");
            // $('<img>',{
            //     'src' : './images/ico_eye_off@2x.png'
            // })
        }else{
            //$(this).attr('class',"fa-regular fa-eye fa-lg eyes")
            $(this).attr('class',"fa-regular fa-eye eyes eyes").prev('input').attr('type','password');
            // $('<img>',{
            //     'src' : './images/ico_eye@2x.png'
            // })
        }
    });
});


/*통계 - 전일, 최근7일, 최근30일, 최근1년*/
$(function(){
    $(".date-area .btn").each(function () {
        $(this).click(function(){
            $(this).addClass("on"); 

            $(this).siblings().removeClass("on");
        });
    });
});

/*통계- tbody 스크롤(tr태그가 8개이하일때 style="width: calc(100% - .5rem);" 없애기)*/
$(function(){

    let trCnt = $("#myTable tbody tr").length;
    console.log(trCnt);

    if ( trCnt < 8 ) {
        $("#table-th").css("width", "");
		//$("#table-th").css("width", "calc(100% - .5rem)");
	}else{
		return false;
	}
});
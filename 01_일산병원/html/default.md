# 설명글

# 팝업 script.js 참조

```script
//함수애 id값 지정하여 동작
//팝업 open 함수 fnShowPop()
//팝업 close 함수 fnHidePop()

function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    //var mHeight = $layer.find(".popup-dialog").height()/2;
    //$layer.find(".popup-dialog").css({'margin-top':-mHeight});
    $layer.addClass("open");
    $('.popup-dialog-mask').fadeIn(150);
    $layer.draggable({
        handle : '.dialog-title' // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });   //마우스드래그


    // 화면의 중앙에 레이어를 띄운다.
    $(".popup-dialog").css({
        "top": (($(window).height()-$(".popup-dialog").outerHeight())/2+$(window).scrollTop())+"px",
        "left": (($(window).width()-$(".popup-dialog").outerWidth())/2+$(window).scrollLeft())+"px"
    });

}
    
//popup hide 닫기
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("open");
    $('.popup-dialog-mask').fadeOut(150);
}
```


```html
<button onclick="fnShowPop('re_pwd')">버튼이름</button>

<div class="popup-dialog-mask"></div>

<div class="popup-dialog dialog-sm rounded shadow" id="re_pwd">
    <div class="dialog-title">타이틀</div>
    <div class="dialog-body">
        팝업 본문 영역
    </div>
    <div class="dialog-buttons">
        <button class="button gray">취소</button>
        <button class="button primary">변경</button>
    </div>
    <!-- <div class="dialog-resizer" unselectable="on" style="user-select: none;"></div> -->
    <div class="dialog-close" onclick="fnHidePop('re_pwd')"></div>
</div>
```


# 팝업 width

```css
.dialog-sm{width: 360px;}
.dialog-lg{width: 720px;}

기본사이즈는 540px
```

```html
<div class="popup-dialog dialog-sm rounded shadow" id="re_pwd"></div>

| width               | 비고               |
| :-------------------| :----------------- |
| 360px               | 비밀번호변경 |
| 720px               | CCTV확대보기 |
| 360px               | 환자정보 미리보기|
| 960px               | 환자정보|
| 360px               | 센서기기 찾기 |
| 360px               | 센서기기 등록 |
| 360px               | 센서기기 상세/수정 |
| 360px               | 사용자등록, 상세/수정 |
| 360px               | 권한그룹추가 |
| 640px               | 무시  |
| 640px               | 조치  |
| 960px               | 위험  |
| 360px               | 위험알림 조치  |
| 아직모름            | 이용약관  |
| 아직모름            | 개인정보취급방침  |

```


# 팝업 ID

```html
//전체영상보기
//re_cctv 뒤에 호실번호 붙이기
<a href="#none" onclick="fnShowPop('re_cctv1201')"></a>  //1201호실
....
<a href="#none" onclick="fnShowPop('re_cctv1')"></a>  //보호실1
<a href="#none" onclick="fnShowPop('re_cctv2')"></a>  //보호실2
<a href="#none" onclick="fnShowPop('re_cctv3')"></a>  //보호실3

| id                    | 비고               |
| :-------------------- | :----------------- |
| re_pwd                | 비밀번호변경 |
| re_cctv               | CCTV확대보기 |
| re_preview            | 환자정보 미리보기|
| re_info               | 환자정보|
| re_sensor_search      | 센서기기 찾기 |
| re_sensor_add         | 센서기기 등록 |
| re_sensor_detail      | 센서기기 상세/수정 |
| re_User_reg           | 사용자등록 |
| re_User_view          | 사용자 상세/수정 |
| re_group_plue         | 권한그룹추가 |
| re_disregard          | 무시  |
| re_action             | 조치  |
| re_danger             | 위험  |
| re_danger_alarm       | 위험알림 조치  |
| re_terms              | 이용약관  |
| re_privacy            | 개인정보취급방침  |


| id          | 비고                   |
| :---------- | :----------------------|
| re_cctv1201 | 1201호실 전체영상보기  |
| re_cctv1202 | 1202호실 전체영상보기  |
| re_cctv1203 | 1203호실 전체영상보기  |
| re_cctv1204 | 1204호실 전체영상보기  |
| re_cctv1205 | 1205호실 전체영상보기  |
| re_cctv1206 | 1206호실 전체영상보기  |
| re_cctv1207 | 1207호실 전체영상보기  |
| re_cctv1208 | 1208호실 전체영상보기  |
| re_cctv1209 | 1209호실 전체영상보기  |
| re_cctv1210 | 1210호실 전체영상보기  |
| re_cctv1211 | 1211호실 전체영상보기  |
| re_cctv1212 | 1212호실 전체영상보기  |
| re_cctv1    | 보호실1 전체영상보기   |
| re_cctv2    | 보호실2 전체영상보기   |
| re_cctv3    | 보호실3 전체영상보기   |
```

# 권합그룹추가, 삭제

<button type="button" class="button ico_add" onclick='rowAdd()'>추가</button>
<button class="button gray" onclick="rowDel(this);">

테이블 id  #myTable
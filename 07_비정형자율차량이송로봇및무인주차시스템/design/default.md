# 설명글

# 팝업 script.js 참조

```script
//함수애 id값 지정하여 동작
//팝업 open 함수 fnShowPop()
//팝업 close 함수 fnHidePop()

function fnShowPop(sGetName){
    var layer = $("#"+ sGetName);

    layer.addClass("open");
}
    
//popup hide 닫기
function fnHidePop(sGetName){
    //var $layer = $("#"+ sGetName);

    $("#"+ sGetName).removeClass("open");
}
```


```html

<div class="modal-wrapper" id="re_pwd">
    <div class="modal small">
        <div class="header">
            <h1>
                타이틀명
                <button class="btn btn-close" alt="닫기"></button>
            </h1>
        </div>
    </div>
    <div class="content">
        팝업 본문 영역
    </div>
    <div class="btn-gruoup mt-0">
        <button class="btn secondary">취소</button>
        <button class="btn base">확인</button>
    </div>
</div>
```


# 팝업 width

기본사이즈는 width: 428px;
```

```html
<div class="modal-wrapper open" id=""></div>

```


# 팝업 ID

```html
<a href="#none" onclick="fnShowPop('pop_영문자')"></a>  

pop_영문자

| id                    | 비고               |
| :-------------------- | :----------------- |
| pop_id                 | ID 찾기 |
| pop_id_result          | ID 찾기 결과 |
| pop_reset              | 비밀번호 초기화|
| pop_pwd                | 비밀번호 변경|
| pop_User_reg           | 사용자등록 |
| pop_User_detail        | 사용자상세/수정 |
| pop_robot_add          | 로봇등록 |
| pop_robot_detail       | 로봇상세/수정 |
| pop_group_plue         | 권한그룹추가 |
| pop_terms              | 이용약관  |
| pop_privacy            | 개인정보취급방침  |
| pop_waiting            | 대기장소선택  |

```

# 권합그룹추가, 삭제

<button type="button" class="btn btn-add" onclick="rowAdd()">추가</button>
<button class="btn-delete" onclick="rowDel(this);">

테이블 id  #myTable


# 대시보드 - 인프라 모니터링 현황

```color (계량기)
#49BD8A     rgb(73,189,138)

#E63817     rgb(230,56,23)

#FFA63B     rgb(255,166,59)

#262727     rgb(38,39,39)

```text
#49BD8A  (녹색계열)
#E63817  (붉은계열)
```

# 통계 - 막대그래프, 도넛그래프 
```color 
    도넛그래프 
    rgba(62, 171, 179, 1)  => 시스템연결오류, 장애물감지  
    rgba(230, 56, 23, 1)    => 리프트오류, 긴급정지
    rgba(73, 189, 138, 1)   => 구동장치오류, 원인1
    rgba(51, 153, 204, 1)   => 경로설정오류, 원인2

    도넛그래프 가운데 텍스트 색상
    #49BD8A  => 숫자건수
    #fff   => 오류, 비상정지

    도넛그래프 Tooltip 
    background: #33383A
    border: 1px solid #707070
    border-radius: 7px 7px 0px 7px
    color: #fff 
    color: #E63817
    


    막대그래프
    rgba(62, 171, 179, 1)
    rgba(230, 56, 23, 1)

    막대그래프 텍스트 색상 
    #fff

    막대그래프 x,y 축 라인색상
    rgba(112, 112, 112, 1)
    border-width: 2

    막대그래프 가이드라인 색상
    gridLines
        color: "rgba(51, 51, 51, 1)",
        zeroLineColor: "rgba(51, 51, 51, 1)",

    막대그래프 Tooltip
    background: rgba(47, 50, 53, 1)
    border: 1px solid rgba(217, 252, 255, 0.16)
    border-radius: 8px;
    color: #8B9190
    color: #fff 

```

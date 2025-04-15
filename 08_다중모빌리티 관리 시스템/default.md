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
                <button class="btn btn-close" alt="닫기" onclick="fnHidePop(' ');"></button>
            </h1>
        </div>
    </div>
    <div class="content">
        팝업 본문 영역
    </div>
    <div class="btn-gruoup">
        <button class="btn cancel">취소</button>
        <button class="btn basic">확인</button>
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
| pop_deli               | 배송지 설정|
| pop_alarm              | 긴급알림|

```

# 모발리티 운행 상태 출력
DRIVE (주행중) / BRAKE (감속중) / STOP (정지상태)

```color 
DRIVE (주행중) text-blue   color: #2491FD     rgb(36,145,253)

BRAKE (감속중)  text-green  color: #49BD8A     rgb(73, 189, 138)

STOP (정지상태) text-danger  color: #E63817    rgb(230, 56, 23)
```

# 배터리 잔량에 따라 색상표시 (100~30% : 양호, 29~0% : 충전필요) 

```color 

100~30% : 양호   (녹색계열) #49BD8A     rgb(73, 189, 138)

29~0% : 충전필요  (붉은계열) #E63817    rgb(230, 56, 23)

```
 
# - 모빌리티 운행 정보 표시 : 아이콘 + 상태 표시(주행중, 감속중, 정지, 충전, 대기, 접속끊김 색상으로 구분)



$(document).ready(function(){

    //탭메뉴
    $('ul.tab_menu li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('.tab_menu li').removeClass('current');
        $('.tab_content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


    /*비밀번호 눈모양 표시 
    https://kutar37.tistory.com/entry/비밀번호-보기숨기기-기능구현
    https://jsfiddle.net/jmy59tod/1/*/
    $('.main i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            $(this).attr('class',"fa fa-eye-slash fa-lg")
            .prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"fa fa-eye fa-lg")
            .prev('input').attr('type','password');
        }
    });

});

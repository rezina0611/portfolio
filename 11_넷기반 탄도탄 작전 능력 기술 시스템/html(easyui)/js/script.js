
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

// $(function(){
//     $(".tab-menu li a").each(function () {
//         $(this).click(function(){
//             $(this).addClass("on"); 
//             $(this).siblings().removeClass("on");
//         });
//     });
// });

// $(function () {
//     $('#divBodyScroll').scroll(function () {
//         var xPoint = $('#divBodyScroll').scrollLeft();
        
//         $('#divHeadScroll').scrollLeft(xPoint);
//     });
// });


//// Sidebar-dropdown - Map
$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});



//// Sidebar-updown - Search Result
$(".sidebar-updown > a").click(function() {
  $(".sidebar-result-list").slideDown(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-updown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-updown").removeClass("active");
    $(this)
      .next(".sidebar-result-list")
      .slideUp(200);
    $(this)
      .parent()
      .addClass("active");
  }
});



//// Sidebar-dropdown - 통합지도 사업분류
$(".search-area .bz-sort").click(function() {
  $(".map-sort-area").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".bz-sort").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".bz-sort").removeClass("active");
    $(this)
      .next(".map-sort-area")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});



//// Sidebar toggle
$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


$("#map-toggle").click(function(e) {
    e.preventDefault();
    $(".map-wrapper").toggleClass("toggled");
});



//// Sidebar-dropdown - Admin side menu
$(".side-menu-dropdown > a").click(function() {
  $(".side-menu-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".side-menu-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".side-menu-dropdown").removeClass("active");
    $(this)
      .next(".side-menu-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});



//// Layer popup
$( document ).ready(function() {
    $('.trigger-modify').on('click', function() {
        $('#modal-modify').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
     return false;
  });

    $('.trigger-register-wf').on('click', function() {
        $('#modal-register-wf').toggleClass('open');
     return false;
  });
    
    $('.trigger-info').on('click', function() {
        $('#modal-info').toggleClass('open');
     return false;
  });
	
	$('.trigger-search-pj').on('click', function() {
        $('#modal-search-pj').toggleClass('open');
     return false;
  });

});




//// Tab
var tabBtn = $("#tab-btn > ul > li");     //각각의 버튼을 변수에 저장
var tabCont = $("#tab-cont > div");       //각각의 콘텐츠를 변수에 저장

//컨텐츠 내용을 숨겨주세요!
tabCont.hide().eq(0).show();

tabBtn.click(function(){
  var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
  var index = target.index();   //버튼의 순서를 변수에 저장
  tabBtn.removeClass("active");    //버튼의 클래스를 삭제
  target.addClass("active");       //타겟의 클래스를 추가
  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});


//// Tab
var tabBtn2 = $("#tab-btn2 > ul > li");     //각각의 버튼을 변수에 저장
var tabCont2 = $("#tab-cont2 > div");       //각각의 콘텐츠를 변수에 저장

//컨텐츠 내용을 숨겨주세요!
tabCont2.hide().eq(0).show();

tabBtn2.click(function(){
  var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
  var index = target.index();   //버튼의 순서를 변수에 저장
  tabBtn2.removeClass("active");    //버튼의 클래스를 삭제
  target.addClass("active");       //타겟의 클래스를 추가
  tabCont2.css("display","none");
  tabCont2.eq(index).css("display","block");
});













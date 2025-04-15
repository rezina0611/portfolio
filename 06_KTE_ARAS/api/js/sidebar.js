
//// Sidebar toggle
$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $(".page-wrapper").toggleClass("toggled");
});



//// Sidebar-dropdown - Map
$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  )
  {
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


//// 프로젝트 정보 - 사업장 상세정보
$(".block-list li .detail-dropdown").click(function() {
  $(".list-detail-info").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".detail-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".detail-dropdown").removeClass("active");
    $(this)
      .next(".list-detail-info")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
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
    
    $('.search-btn').on('click', function() {
        $('#layer-search-result').toggleClass('open');
     return false;
  });
    
    $('.place-info').on('click', function() {
        $('#layer-manage-place').toggleClass('open');
     return false;
  });

    $('.project-info').on('click', function() {
        $('#layer-project-info').toggleClass('open');
     return false;
  });
    
    $('.img-detail').on('click', function() {
        $('#layer-img-detail').toggleClass('open');
     return false;
  });
	
	$('.img-desc').on('click', function() {
        $('#layer-img-desc').toggleClass('open');
     return false;
  });
	
    // 알림
	$('.notification').on('click', function() {
        $('#layer-notification').toggleClass('open');
     return false;
  });
	
    // 지도 > 사업영역 레이어
    $('.bz-toggle').on('click', function() {
        $('#Toggle').toggleClass('open');
     return false;
  });
    
    // 수행품질평가 팝업
    $('.st-01').on('click', function() {
        $('#layer-st-01').toggleClass('open');
     return false;
  });
    
    $('.st-02').on('click', function() {
        $('#layer-st-02').toggleClass('open');
     return false;
  });
    
    $('.st-03').on('click', function() {
        $('#layer-st-03').toggleClass('open');
     return false;
  });
    
    $('.st-04').on('click', function() {
        $('#layer-st-04').toggleClass('open');
     return false;
  });
    
    $('.st-05').on('click', function() {
        $('#layer-st-05').toggleClass('open');
     return false;
  });
    
    //위험성평가 선택 팝업
  $('.st-06').on('click', function() {
    $('#layer-st-06').toggleClass('open');
    return false;
  });

  //전자서명 팝업
  $('.trigger-sign').on('click', function() {
    $('#modal-sign').toggleClass('open');
    return false;
  });
    
    //설정 팝업
  $('.setting').on('click', function() {
    $('#layer-setting').toggleClass('open');
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


//// Tab2
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


//// Tab3
var tabBtn3 = $("#tab-btn3 > ul > li");     //각각의 버튼을 변수에 저장
var tabCont3 = $("#tab-cont3 > div");       //각각의 콘텐츠를 변수에 저장

//컨텐츠 내용을 숨겨주세요!
tabCont3.hide().eq(0).show();

tabBtn3.click(function(){
  var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
  var index = target.index();   //버튼의 순서를 변수에 저장
  tabBtn3.removeClass("active");    //버튼의 클래스를 삭제
  target.addClass("active");       //타겟의 클래스를 추가
  tabCont3.css("display","none");
  tabCont3.eq(index).css("display","block");
});



const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
 dropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdowns.forEach((c) => c.classList.remove("is-active"));
  dropdown.classList.add("is-active");
 });
});

$(document).click(function (e) {
 var container = $(".status-button");
 var dd = $(".dropdown");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
  dd.removeClass("is-active");
 }
});


//// 품질평가 summary 내 펼침
$('.check-box .e-reason').hide();
$(".check-box .e-check").click(function () {
  $(this).parent(".check-box").children(".e-reason").slideToggle("fast");
});




















$(".loading").addClass("show");
$("body").addClass("noScroll");
setTimeout(function(){
  $(".loading").removeClass("show");
  $("body").removeClass("noScroll");
  if($(window).width()>1230){
    // setTimeout(function () {
      $(".featureList .item .img").addClass("animation2");
    // }, 500);
  }
},2000)

$(document).keydown(function (event) {
  if(event.which==37||event.which==39){
    event.preventDefault();
  }
});

// easeScroll
$("html").easeScroll();

// header start
if($(window).width()<1230){
  $(".headerBooking-header")
  .on("click", function (e) {
    e.preventDefault;
    $("ul.headerBooking-header").toggleClass("show");
  })
}else{
  $(".headerBooking-header")
  .on("mouseenter", function () {
    $("ul.headerBooking-header").addClass("show");
  })
  .on("mouseleave", function () {
    $("ul.headerBooking-header").removeClass("show");
  });
}

$(".languageBox-header span").on("click", function () {
  $(".language-header").toggleClass("show");
});
// header end

// ytbg start
jQuery("[data-youtube]").youtube_background();
// ytbg end

//  newsArea start
$(".slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
      },
    },
  ],
});
$(".sliderBtnPrev").on("click", function () {
  $(".slider").slick("slickPrev");
});
$(".sliderBtnNext").on("click", function () {
  $(".slider").slick("slickNext");
});

$(".newsArea .dotBox a").click(function () {
  var cardShow = 4;
  if($(window).width()<767){
    cardShow= 2;
  }else if($(window).width()<1420){
    cardShow = 3;
  }
  if (!$(this).hasClass("current")) {
    var index = $(".newsArea .dotBox a").index(this);
    $(this).addClass("current").siblings().removeClass("current");
    $(".slider").slick("slickGoTo", index * cardShow);
    console.log(index * cardShow);
  }
});
//  newsArea end

// linkArea start
if ($(window).width() > 1230) {
  $(window).scroll(function () {
    offsetTop = $(window).scrollTop();
    if (offsetTop < $(".featureArea").offset().top) {
      TweenLite.to(".linkArea .link-leftBox", 1, { y: -offsetTop / 20 });
      // TweenLite.to(".linkArea .rings", 1, { y : -offsetTop/20 });
      TweenLite.to(".linkArea .link-rightBox", 1, { y: offsetTop / 150 });
      TweenLite.to(".linkArea .link-txt", 1, { y: -offsetTop / 8 });
    }
  });
}
// linkArea end

// featureArea start
$(".featureList").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        swipe: true,
        // lazyLoad: "ondemand",
        fade: true,
        speed: 1000,
      },
    },
  ],
});




$(".featureArea .dotBox a").click(function () {
  var index = $(".featureArea .dotBox a").index(this);
  if ($(window).width() < 1230) {
    if (!$(this).hasClass("current")) {
      $(this).addClass("current").siblings().removeClass("current");
      $(".featureList").slick("slickGoTo", index);
    }
  } else {
    if (!$(this).hasClass("current")) {
      $(".featureList .item .img").addClass("animation1");
      $(".featureList .item").addClass("change");
      $(this).addClass("current").siblings().removeClass("current");
      setTimeout(function () {
        $(".featureList .item .img").removeClass("animation2");
      }, 500);
      setTimeout(function () {
        $(".featureList").slick("slickGoTo", index, true);
        $(".featureList .item .img").removeClass("animation1");
        $(".featureList .item").removeClass("change");
        // $(".featureList .item .img").removeClass("animation2");
        $(".featureList .item .img").addClass("animation2");
      }, 700);
    }
  }
});
// featureArea end

// map start
var map = L.map("map").setView([25.011717, 121.461704], 20);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
var marker = L.marker([25.011717, 121.462704]).addTo(map);
// map end

// book start
function fun1() {
  $("#to").focus();
}
$(function () {
  var Today = new Date();
  var dateFormat = "mm/dd/yy";
  $("#from")
    .datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      yearRange: "2020:2021",
      numberOfMonths: 1,
      minDate: new Date(),
      onClose: fun1,
    })
    .on("change", function () {
      $("#to").datepicker(
        "option",
        "minDate",
        $("#from").datepicker("getDate")
      );
    });
  $("#to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    yearRange: "2020:2021",
    numberOfMonths: 1,
    minDate: new Date(),
  });
});

$(".bookBox .text input").on("focus", function () {
  $(this).parent().parent().addClass("show");
});
if ($(".bookBox .text").hasClass("show")) {
}
$(".bookBox .text input").on("blur", function () {
  $(this).parent().parent().removeClass("show");
});

$(".book-btn").on("click", function (e) {
  e.preventDefault();
  if ($("#from").val() == "" || $("#to").val() == "") {
    var txt = "";
    if ($("#from").val() == "") {
      txt += "請選擇入住日期\n";
    }
    if ($("#to").val() == "") {
      txt += "請選擇退房日期\n";
    }
    alert(txt);
  }
});
// book end

// scroll to top start

$(".scroll").click(function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// scroll to top end

// menu start
function menuShow() {
  $(".menuArea").toggleClass("menu-show");
  $(".menu-btn > span:nth-child(2) > span:nth-child(1)").toggleClass(
    "rotate45"
  );
  $(".menu-btn > span:nth-child(2) > span:nth-child(2)").toggleClass(
    "rotate-45"
  );
  $(".menu-btn > span:nth-child(1)").toggleClass("opacity0");
  $(".menu-btn > span:nth-child(3)").toggleClass("opacity0");
  $(".menu-btn").toggleClass("btn-show");
  $("body").toggleClass("noScroll");
  $(".headerBookingBox").toggleClass("menuShow");
  $(".languageBox").toggleClass("menuShow");
  $(".menuBox h2").toggleClass("menuShow");
  $(".menuBox .menu-item").toggleClass("menuShow");
  $(".menu-bottom").toggleClass("menuShow");

  if ($(".language-menu").hasClass("show")) {
    $(".language-menu").removeClass("show");
  }
}
$(".menu-btn").on("click", function () {
  menuShow();
});
$(".menu-block").on("click", function () {
  menuShow();
});

$(".headerBooking-menu")
  .on("mouseenter", function () {
    $("ul.headerBooking-menu").addClass("show");
  })
  .on("mouseleave", function () {
    $("ul.headerBooking-menu").removeClass("show");
  });

$(".languageBox-menu span").on("click", function () {
  $(".language-menu").toggleClass("show");
});
// menu end

// header
function headerChange() {
  if ($(window).scrollTop() >= 100) {
    $("header").addClass("change");
    $(".menu-btn").addClass("btn-change");
  } else if ($(window).scrollTop() < 100) {
    $("header").removeClass("change");
    $(".menu-btn").removeClass("btn-change");
  }
}
function scrollChange() {
  if ($(window).scrollTop() >= 500) {
    $(".scroll").addClass("show");
  } else if ($(window).scrollTop() < 500) {
    $(".scroll").removeClass("show");
  }
}
headerChange();
scrollChange();

// menu-down
var scroll = $(window).scrollTop();
$(window).on("scroll", function () {
  headerChange();
  scrollChange();
  if($(window).width()<960){
    if($(window).scrollTop()<scroll){
      $(".menu-down").removeClass('hide');
    }else if($(window).scrollTop()>scroll){
      $(".menu-down").addClass('hide');
    }
  }else{
    $(".menu-down").removeClass('hide');
  }
  scroll = $(window).scrollTop();
});

// resize
$(window).resize(function(){
  if($(window).width()<960){
    $(".menu-down").removeClass('hide');
  }
})

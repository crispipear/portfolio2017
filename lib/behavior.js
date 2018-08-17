var scroll;
var clicked = 0;
$(document).on('click touchstart', '#burger', function(){
  if($('nav').hasClass('load-menu')){
        $('nav').addClass("open-menu").removeClass("load-menu");
  }
  else if($('nav').hasClass('close-menu')){
    $('nav').addClass("open-menu").removeClass("close-menu");
  }else if($('nav').hasClass('open-menu')){
    $('nav').addClass("close-menu").removeClass("open-menu");
  }
});
$(document).ready(function() {
  document.title = "Su Li — Front End Developer & UX Designer";
  setTimeout(function(){  $('#loader').css('width', '0');}, 750);
  setTimeout(function(){  $('body').css('overflow', 'auto');}, 750);
  $('#footer span').html("&#xA9; 2018 &#x1F4BB; Built by Su Li");
  console.log('Designed and Developed by Su Li 2018 🍐');


$(window).scroll(function() {
  if($(window).scrollTop() > $(window).height()/2){
    $('#nav-top').css('opacity', '1');
    $('#background').css('opacity', '0.25');
  }else{
    $('#nav-top').css('opacity', '0');
    $('#background').css('opacity', '1');
  }
  $('.container, .proj-div, .proj-full-img').each(function() {
    var objectScroll = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 550)) {
      $(this).animate({
        opacity: 1
      }, 750)
      $(this).css('transform', 'translateY(0%)')
    }
  });
});

  var topPage = '<img src="../files/back.svg" id="nav-top" class="nav"><img src="../files/back.svg" id="nav-back" data-href="../index.html#projsTag" class="exitPage nav"/>';
  $('.contents').append(topPage);
  var nav = '<nav class="load-menu"><div id="menu"><a>HOME</a><a>WORK</a><a>ABOUT</a></div>'
            +'<div id="burger"><span></span><span></span><span></span></div></nav>';
  $('.contents').append(nav);
  $('#nav-top').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('body').offset().top)
    }, 750);
  });
  $('.exitPage').on('click touchstart', function() {
    var href = $(this).attr('data-href');
    $('#loader').css('width', '100vw');
    $('body').css('overflow', 'hidden');
    setTimeout(function(){window.location.href = href;}, 750);
  });
  $('.proj-header-down').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('section').next().offset().top - 75)
    }, 750);
  })
});

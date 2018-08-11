var scroll;
var clicked = 0;
$(document).ready(function() {
  document.title = "Su Li — Front End Developer & UX Designer";
  setTimeout(function(){  $('#loader').css('width', '0');}, 750);
  setTimeout(function(){  $('body').css('overflow', 'auto');}, 750);
  $('#footer span').html("&copy; 2018 Su Li");
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
        marginTop: '0%',
        opacity: 1,
      }, 1000)
    }
  });
});

  var navitems = '<img src="../files/back.svg" id="nav-top" class="nav"><img src="../files/back.svg" id="nav-back" data-href="../index.html#projsTag" class="exitPage nav"/>';
  $('.contents').append(navitems);
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
      scrollTop: ($('section').next().offset().top)
    }, 750);
  })
});

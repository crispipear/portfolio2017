var scroll;
var clicked = 0;
$(document).ready(function() {
  document.title = "Su Li Portfolio — UX Designer & Front End Developer";
  setTimeout(function(){  $('#loader').css('width', '0');}, 750);
  setTimeout(function(){  $('body').css('overflow', 'auto');}, 750);
  $('#footer span').html("2018 &copy; Design and Development by Su Li");
  console.log('Designed and Developed by Su Li 2017🍐');

$(window).scroll(function() {
  if($(window).scrollTop() > $(window).height()/2){
    $('#nav-top').css('opacity', '1');
  }else{
    $('#nav-top').css('opacity', '0');
  }
  $('.container').each(function(i) {
    var objectScroll = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 500) && ($(this).offset().top >= $(window).height())) {
      $(this).addClass('slideUp');
    }
  });
});

$('#nav-top').click(function() {
  $('html, body').animate({
    scrollTop: ($('body').offset().top)
  }, 750);
});
$('.exitPage').click(function() {
  var href = $(this).attr('data-href');
  $('#loader').css('width', '100vw');
  $('body').css('overflow', 'hidden');
  setTimeout(function(){window.location.href = href;}, 750);
});
});

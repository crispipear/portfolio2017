var currentIndex = 0;
var projData;
$.getJSON( "lib/data.json", function( data ) {
  projData = data.projects
})
$(document).ready(function(){
  var nav =   '<nav class="load-menu"><div id="burger"><span></span><span></span><span></span></div>'
        +'<div id="menu"><a id="nav-top">HOME</a><a id="nav-ixd">WORK</a><a id="nav-about">ABOUT</a></div></nav>';
  $('body').append(nav)
  drawBg();
  $.each(projData, function(i, proj){
    let item =
    '<div class="proj-div">'
    +'<div class="proj-bg" style="background-image: url(./'+proj.path+'/thumbnail.png)"></div>'
    +'<div class="proj-info-bg"></div>'
    +'<div class="proj-info">'
      +'<h2>'+proj.name+'</h2>'
      +'<p class="proj-type">'+proj.type+'</p>'
      +'<p class="proj-des">'+proj.des+'</p>'
      +'<a class="exitPage" data-href="./'+proj.path+'/">View Project</a>'
    +'</div>'
    +'</div>';
    $('#projs .container').append(item);
  });
  $('#nav-about, #mobile-nav-about').on('click touchstart', function() {
    console.log('test')
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 750);
  });
  $('#nav-ixd, #mobile-nav-ixd').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
    }, 750);
  });
  $(window).scroll(function() {
    $('.proj-div').each(function() {
      let div = $(this).offset().top;
      let windowScroll = $(window).scrollTop();
      if ((windowScroll >= div - 450)) {
        $(this).animate({
          opacity: 1
        }, 750)
        $(this).css('transform', 'translateX(0%)')
      }
    });
    let objectScroll = $('#about').offset().top;
    let windowScroll = $(window).scrollTop();
    if (windowScroll >= objectScroll- 150) {
      $('.col-4').css({
        'transform': 'translateX(0%)',
        'opacity': 1
      })
      $('.col-7').css({
        'transform': 'translateX(0%)',
        'opacity': 1
      })
    }
  });
});

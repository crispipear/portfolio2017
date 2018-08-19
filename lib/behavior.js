var projData;
$.getJSON( "../lib/data.json", function( data ) {
  projData = data.projects
})
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
  setTimeout(function(){  $('#loader').css('width', '0')}, 750);
  setTimeout(function(){  $('body').css('overflow', 'auto');}, 750);
  setTimeout(function(){  $('.proj-header-down').css('opacity', '1');}, 2500);

  console.log('Designed and Developed by Su Li 2018 🍐');


$(window).scroll(function() {
  if($(window).scrollTop() > $(window).height()/2){
    $('#nav-top').css('opacity', '1');
  }else{
    $('#nav-top').css('opacity', '0');
  }
  $('.container, .proj-full-img').each(function() {
    let objectScroll = $(this).offset().top;
    let windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 550)) {
      $(this).animate({
        opacity: 1
      }, 750)
      $(this).css('transform', 'translateY(0%)')
    }
  });
});

  var topPage = '<img src="../files/back.svg" id="nav-top" class="nav"><img src="../files/back.svg" id="nav-back" data-href="../index.html#projsTag" class="exitPage nav"/>';
  var nav = '<nav class="load-menu"><div id="burger"><span></span><span></span><span></span></div>'
            +'<div id="menu"><a class="exitPage" data-href="../index.html">HOME</a><a class="exitPage" data-href="../index.html#projsTag">WORK</a><a class="exitPage" data-href="../index.html#about">ABOUT</a></div></nav>';
  $('.contents').append(topPage);
  $('.contents').append(nav);
  $(document).on('click touchstart', '#nav-top', function() {
    $('html, body').animate({
      scrollTop: ($('body').offset().top)
    }, 750);
  });

  $(document).on('click touchstart', '.exitPage', function(){
    let href = $(this).attr('data-href');
    $('#loader').css('width', '100vw');
    $('body').css('overflow', 'hidden');
    setTimeout(function(){window.location.href = href;}, 750);
  });

  $('.proj-header-down').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('section').next().offset().top - 75)
    }, 750);
  })

  if($('.contents').length){
    let projName = $('body').attr('data-proj');
    let index, prev, next;
    $.each(projData, function(i, proj){
      if(proj.path === projName){
        index = i;
      }
    });
    if(index-1 < 0){prev=projData.length-1}else{prev=index-1}
    if(index+1 > projData.length-1){next=0}else{next=index+1}
    let projFooter = '<section id="projs-footer">'+
      '<div class="prev exitPage" data-href="../'+projData[prev].path+'"><div class="info"><h1>&#x2190;</h1><span>'+projData[prev].name+'</span></div>'+
      '<div class="bg" style="background-image: url(../'+projData[prev].path+'/thumbnail.png)"></div></div>'+
      '<div class="next exitPage" data-href="../'+projData[next].path+'"><div class="info"><h1>&#x2192;</h1><span>'+projData[next].name+'</span></div>'+
      '<div class="bg" style="background-image: url(../'+projData[next].path+'/thumbnail.png)"></div></div>'+
    '</section>';
    $('.contents').append(projFooter)
  }
  var footer = '<div id="footer"><div class="container"><span><span>&#169;</span> 2018 Made by Su Li &#x1F60E; &#x3030; <a href="mailto:hiiamsuli@gmail.com" target="_blank">SAY HELLO</a> &#128075;</span>'+
  '<span><a href="https://www.linkedin.com/in/su-li-4b3403130" target="_blank">LINKEDIN</a> &#x3030; '+
  '<a href="https://www.behance.net/suli7497807f" target="_blank">BEHANCE</a> &#x3030; '+
  '<a href="https://codepen.io/crispipear/" target="_blank">CODEPEN</a> &#x3030; '+
  '<a href="https://github.com/crispipear" target="_blank">GITHUB</a>'+
  '</span></div></div>';
  $('body').append(footer);

});

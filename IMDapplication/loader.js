var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
$(document).ready(function () {
  console.log(window.innerWidth + ", " + window.innerHeight);
    for(i = 0; i < 7; i++){
      $('#projfp'+(i+1)).css('background-image', 'url("proj/fphoto/' + (i+1) + '.png")');
    }
});
$( window ).on( "load", function() {
    console.log( "loaded" );
    setInterval(
      function(){$('#loader').fadeOut();}, 1000);
    setInterval(
      function(){$('#loadscreen').fadeOut();}, 1500);
    setInterval(
      function(){$('body').css("overflow-y","auto");}, 1500);
    setInterval(
        function(){$('.header').addClass("desfadein");}, 2500);
});

$(window).scroll(function() {
    titleScroll();
    fadeinContent();
});

function titleScroll() {
	scrollPos = $(this).scrollTop();
	$('.banner').css({
		'background-position':'50% '+ (-scrollPos/2)+"px"
	});
	$('.title').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/150)
	});
}

function fadeinContent(){
  scrollVal = $(this).scrollTop();
  if(scrollVal > (innerHeight*0.25)){
    $('#menu').addClass("menufadein");
    $('.description').addClass("desfadein");
  }
  if(scrollVal > (innerHeight*0.75)){
    $('#projs').addClass("contentfadein");
  }
  if(scrollVal > (innerHeight*2.5)){
    $('#aboutcontent').addClass("contentfadein");
  }
  if(scrollVal > (innerHeight*3.5)){
    $('#contactcontent').addClass("contentfadein");
  }
}

function openMenu() {
    $("#navmenu").css("width","200px");
    $("#menu").css("display","none");
}
function closeMenu() {
    $("#navmenu").css("width","0px");
    $("#menu").css("display","block");
}
$("#submit").hover(function() {
  $(this).val("LET'S TALK");
}, function() {
  $(this).val("SUBMIT");
});

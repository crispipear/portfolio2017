var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var menuOpen = false;
$(document).ready(function () {
  console.log(window.innerWidth + ", " + window.innerHeight);
    for(i = 0; i < 7; i++){
      $('#projfp'+(i+1)).css('background-image', 'url("proj/fphoto/' + (i+1) + '.png")');
    }
});
$( window ).on( "load", function() {
    console.log( "loaded" );
    $('#lpcontent').addClass("contentfadein");
    // setInterval(
    //   function(){$('#lpcontent').addClass("contentfadein");}, 500);
});

$(window).scroll(function() {
    fadeinContent();
});
//responsive mobile menu
if ($(window).width() <= 580){
  $('#navbar').html('<div id = "menubutton" class = "navitems"><span>&#9778;</span></div><a href = "http://students.washington.edu/rice74/eport/#landpg"><div class = "navitems"><span>home</span></div></a><a href = "http://students.washington.edu/rice74/eport/#projs"><div class = "navitems"><span>work</span></div></a><a href = "http://students.washington.edu/rice74/eport/#contact"><div class = "navitems"><span>contact</span></div></a><a href = "#btop"><div class = "navitems"><span>top</span></div></a>');
}
$('#menubutton').click(function() {
  if(menuOpen === true){
    $('.navitems').css('display','none');
    $('#menubutton').css('display','block');
    menuOpen = false;
  }else if(menuOpen === false){
    $('.navitems').css('display','block');
    menuOpen = true;
  }
});
//
function fadeinContent(){
  scrollVal = $(this).scrollTop();
  if(scrollVal > (innerHeight*0.15)){
    $('.description').addClass("contentfadein");
  }
  if(scrollVal > (innerHeight*0.75)){
    $('#projs').addClass("contentfadein");
  }
  if(scrollVal > (innerHeight*1.75)){
    $('#contact').addClass("contentfadein");
  }
}

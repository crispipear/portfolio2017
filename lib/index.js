var projects = [
  {
    name: "Clinic+",
    type: "mobile application",
    des: "Technological system that optimizes clinic management and improves patient's clinic experience.",
    path: "clinicplus"
  },
  {
    name: "Waves",
    type: "mobile application, public installation",
    des: "Public installation integrated with mobile app that brings public awareness to stress.",
    path: "waves"
  },
  {
    name: "Eatlixir",
    type: "web platform",
    des: "Web platform that provides medicinal diet information inspired by Chinese herbology.",
    path: "eatlixir"
  },
  {
    name: "Pocket Husky",
    type: "mobile application",
    des: "Mobile app that engages student interaction and exploration on the UW Bothell campus.",
    path: "pockethusky"
  },
  {
    name: "Anti-Establishment",
    type: "marketing campaign, alternate reality game",
    des: "Identity created for an alternate reality game that centers around the topic of climate change.",
    path: "antiestablishment"
  }
];
var currentIndex = 0;
$(document).ready(function(){
  drawBg();
  $.each(projects, function(i, proj){
    var item =
    '<div class="proj-div">'
    +'<div class="proj-bg" style="background-image: url(./'+proj.path+'/thumbnail.png)"></div>'
    +'<div class="proj-info-bg"></div>'
    +'<div class="proj-info">'
      +'<h2>'+proj.name+'</h2>'
      +'<p class="proj-type">'+proj.type+'</p>'
      +'<p class="proj-des">'+proj.des+'</p>'
      +'<a class="exitPage" data-href="./'+proj.path+'/">view project</a>'
    +'</div>'
    +'</div>';
    $('#projs .container').append(item);
  });
  if(window.location.hash && window.location.hash == '#projsTag'){
    $('.proj-div').css('opacity', '1');
  }
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

});

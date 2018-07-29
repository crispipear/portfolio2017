var projects = [
  {
    name: "Clinic+",
    type: "ui/ux, app prototype",
    des: "Technology systems that optimizes clinic management and improves patient's clinic experience.",
    path: "clinicplus"
  },
  {
    name: "Waves",
    type: "video prototype, app prototype",
    des: "Public installation integrated with mobile app that brings public awareness to stress.",
    path: "waves"
  },
  {
    name: "Eatlixir",
    type: "web design, web dev",
    des: "Web platform that provides medicinal diet information inspired by Chinese herbology.",
    path: "eatlixir"
  },
  {
    name: "Pocket Husky",
    type: "ui/ux, app prototype",
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
    +'<div class="proj-info">'
      +'<h2>'+proj.name+'</h2>'
      +'<p class="proj-type">'+proj.type+'</p>'
      +'<p class="proj-des">'+proj.des+'</p>'
      +'<a class="exitPage" data-href="./'+proj.path+'/">see project &#x27F6;</a>'
    +'</div>'
    +'</div>';
    $('#projs .container').append(item);
  });

  $('#nav-about').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 750);
  });

  $('#nav-ixd').on('click touchstart', function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
    }, 750);
  });

});

var projects = [
  {
    name: "Clinic+",
    type: "ui/ux, app prototype",
    des: "Technology systems that optimizes clinic management and improves patient's clinic experience.",
    img: "c_tn.png",
    href: "./clinicplus"
  },
  {
    name: "Waves",
    type: "video prototype, app prototype",
    des: "Public installation integrated with mobile app that brings public awareness to stress.",
    img: "w_tn.png",
    href: "./waves"
  },
  {
    name: "Eatlixir",
    type: "web design, web dev",
    des: "Web platform that provides medicinal diet information inspired by Chinese herbology.",
    img: "e_tn.png",
    href: "./eatlixir"
  },
  {
    name: "Pocket Husky",
    type: "ui/ux, app prototype",
    des: "Mobile app that engages student interaction and exploration on the UW Bothell campus.",
    img: "ph_tn.png",
    href: "./pockethusky"
  },
  {
    name: "Anti-Establishment",
    type: "marketing campaign, arg",
    des: "Identity created for an alternate reality game that centers around the topic of climate change.",
    img: "imdy_tn.png",
    href: "./antiestablishment"
  }
];
var currentIndex = 0;
$(document).ready(function(){
  drawBg();
  $.each(projects, function(i, proj){
    var item =
    '<div class="proj-div">'
    +'<div class="proj-bg" style="background-image: url(files/thumbnails/'+proj.img+')"></div>'
    +'<div class="proj-info">'
      +'<h2>'+proj.name+'</h2>'
      +'<p class="proj-type">'+proj.type+'</p>'
      +'<p class="proj-des">'+proj.des+'</p>'
      +'<a class="exitPage" data-href="'+proj.href+'">see project &#x27F6;</a>'
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

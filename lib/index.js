var projects = [
  {
    name: "Clinic+",
    type: "ui/ux, app prototype",
    des: "Technology systems that optimizes clinic management and improves patient's clinic experience.",
    img: "c_tn.png",
    href: "clinicplus.html"
  },
  {
    name: "Waves",
    type: "video prototype, app prototype",
    des: "Public installation integrated with mobile app that brings public awareness to stress.",
    img: "w_tn.png",
    href: "waves.html"
  },
  {
    name: "Anti-Establishment",
    type: "marketing campaign, arg",
    des: "Identity created for an alternate reality game that centers around the topic of climate change.",
    img: "imdy_tn.png",
    href: "antiestablishment.html"
  },
  {
    name: "Eatlixir",
    type: "web design, web dev",
    des: "Web platform that provides medicinal diet information inspired by Chinese herbology.",
    img: "e_tn.png",
    href: "eatlixir.html"
  },
  {
    name: "Pocket Husky",
    type: "ui/ux, app prototype",
    des: "Mobile app that engages student interaction and exploration on the UW Bothell campus.",
    img: "ph_tn.png",
    href: "pockethusky.html"
  }
];
var currentIndex = 0;
$(document).ready(function(){
  $.each(projects, function(key, val){
    var item = "<h3><span class='focus'>&#x27F6; </span><span>0"+ (key+1) +"</span> "+val.name+"</h3>";
    $('.proj-menu div').append(item);
  });
  updateProj(projects[0].name);
  $('.proj-menu h3').click(function(){
    var index = $('.proj-menu h3').index(this);
    // if(index < currentIndex){
    //   $('.proj-menu div').css('margin-top', '15%');
    // }else if(index > currentIndex){
    //   $('.proj-menu div').css('margin-top', '-15%');
    // }else if(index == 0){
    //   $('.proj-menu div').css('margin-top', '0%');
    // }
    // currentIndex = index;
    $('.proj-bg div').animate({
      marginLeft: "15%",
      opacity: "0"
    }, 500);
    $('.proj-info').animate({
      marginLeft: "-15%",
      opacity: "0"
    }, 500);
    updateProj(projects[index].name);
  });
  $('.proj-menu h3').hover(function(){
    $(this).css('color', '#4fdace')
  }, function(){
    $(this).css('color', 'white');
  })
  $('.proj-des a').click(function() {
    $('#load').css('width', '100%')
  });
  $('#nav-about').click(function() {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 750);
  });

  $('#nav-ixd').click(function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
    }, 750);
  });
  $('.proj-item').hover(function(){
    $('.proj-bg div').css("transform","scale(1.25)");
  },function(){$('.proj-bg div').css("transform","scale(1)");})
  function updateProj(projName){
    $('.proj-bg div').animate({
      marginLeft: "0%",
      opacity: "1"
    }, 500);
    $('.proj-info').animate({
      marginLeft: "0%",
      opacity: "1"
    }, 500);
    var index = projects.findIndex(function(proj){
      return proj.name == projName;
    });
    var proj = projects[index];
    var url = "url(../files/thumbnails/"+proj.img+")";
    setTimeout(function(){
      $('.proj-bg div').css("background-image",url);
      $('.proj-type').text(proj.type);
      $('.proj-des').text(proj.des);
      $('.proj-item .cotButton').attr("data-href", "pages/"+proj.href);
    },500);
    projHover(index);
  }
  function projHover(index){
    var proj = $('.proj-menu h3').get(index);
    $('.proj-menu h3').css('transform', 'scale(1)');
    $('.proj-menu h3').find('.focus').css('opacity', '0');
    $(proj).css('transform', 'scale(1.75)');
    $(proj).find('.focus').css('opacity', '1');
  }

});

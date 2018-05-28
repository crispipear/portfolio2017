var projects = [
  {
    name: "Waves",
    type: "video prototype, mobile app prototype",
    des: "Public installation concept integrated with mobile app that brings public awareness to stress.",
    img: "w_tn.png",
    href: "waves.html"
  },
  {
    name: "Eatlixir",
    type: "web design, web dev",
    des: "Web platform that provides meidicinal diet information inspired by Chinese herbology.",
    img: "e_tn.png",
    href: "eatlixir.html"
  },
  {
    name: "Pocket Husky",
    type: "ux design, mobile app concept",
    des: "Mobile app that engages student interaction and exploration on the UW Bothell campus.",
    img: "ph_tn.png",
    href: "pockethusky.html"
  }
];

$(document).ready(function(){
  $.each(projects, function(key, val){
    var item = "<h3><span class='focus'>&#x27F6; </span><span>0"+ (key+1) +"</span> "+val.name+"</h3>";
    $('.proj-menu').append(item);
  });
  updateProj("Waves");
  $('.proj-menu h3').click(function(){
    var index = $('.proj-menu h3').index(this);
    projHover(index);
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

  function updateProj(projName){
    var index = projects.findIndex(function(proj){
      return proj.name == projName;
    });
    var proj = projects[index];
    var url = "url(../files/thumbnails/"+proj.img+")";
    $('.proj-item').css("background-image",url);
    $('.proj-type span').text(proj.type);
    $('.proj-des').text(proj.des);
    $('.proj-item .cotButton').attr("href", "pages/"+proj.href);
    projHover(index);
  }
  function projHover(index){
    var proj = $('.proj-menu h3').get(index);
    $('.proj-menu h3').css('transform', 'scale(1)');
    $('.proj-menu h3').find('.focus').css('opacity', '0');
    $(proj).css('transform', 'scale(1.5)');
    $(proj).find('.focus').css('opacity', '1');
  }
});

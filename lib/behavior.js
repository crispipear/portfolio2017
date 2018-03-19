
var scroll;
var i = 0;
var typing = ' ';
var typestatus = 0;
$(document).ready(function() {
  console.log('Designed and Developed by Su Li 2017🍐');
  $("div.proj-des:not(:first)").hide();
  $(".counter span").first().css("color", "#7592cb" );

  $('.proj-item').each(function() {
    var index = this.id;
    var url = 'url(files/thumbnails/' + index + '.png)';
    $(this).css('background-image', url);
  });
});
$('.proj-des a').click(function(){
  $('#load').css('width','100%')
})
$('.counter span').click(function(){
  var index = $('.counter span').index(this);
  $('.counter span').css('color','#dddddd');
  $(this).css('color','#7592cb');
  var item = $('.proj-des').get(index);
  $("#projNum").text("0"+(index+1));
  $('.proj-des').hide();
  $(item).show();
  $(item).addClass('fadeIn');
});
//menunav
$('#nav-toggle').click(function() {
  $('#nav').css('margin-left', '0%');
});
$('#nav span').click(function() {
  $('#nav').css('margin-left', '-30%');
});
$('#scroll').click(function() {
  $('html, body').animate({
    scrollTop: ($('#projs').offset().top)
  }, 750);
});
$('#nav-top').click(function() {
  $('html, body').animate({
    scrollTop: ($('body').offset().top)
  }, 750);
});
$('#nav-home').click(function() {
  $('html, body').animate({
    scrollTop: ($('#landpg').offset().top)
  }, 750);
});
$('#nav-work').click(function() {
  $('html, body').animate({
    scrollTop: ($('#projs').offset().top)
  }, 750);
});
$('#nav-about').click(function() {
  $('html, body').animate({
    scrollTop: ($('#about').offset().top)
  }, 750);
});

$(window).scroll(function() {
  $('.container').each(function(i) {
    var objectScroll = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 500) && ($(this).offset().top >= $(window).height())) {
      $(this).addClass('slideUp');
    }
  });
});

var options = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: !0,
        value_area: 500
      }
    },
    color: {
      value: "#7592cb"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: !0
    },
    size: {
      value: 2.5,
      random: !0
    },
    line_linked: {
      enable: !1
    },
    move: {
      enable: !0,
      speed: 5,
      direction: "none",
      random: !0,
      straight: !1,
      out_mode: "out",
      bounce: !1
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      resize: !0
    },
    modes: {
      grab: {
        distance: 75,
        line_linked: {
          opacity: .5
        }
      }
    }
  },
  retina_detect: !1
};
particlesJS("particle", options);

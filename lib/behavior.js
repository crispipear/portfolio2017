var scroll;
var clicked = 0;
$(document).ready(function() {
  document.title = "Su Li Portfolio — UX Designer & Front End Developer";
  setTimeout(function(){  $('#loader').css('width', '0');}, 750);
  setTimeout(function(){  $('body').css('overflow', 'auto');}, 750);
  $('#footer span').html("2018 &copy; Design and Development by Su Li");
  console.log('Designed and Developed by Su Li 2017🍐');

$(window).scroll(function() {
  if($(window).scrollTop() > $(window).height()/2){
    $('#nav-top').css('opacity', '1');
  }else{
    $('#nav-top').css('opacity', '0');
  }
  $('.container').each(function(i) {
    var objectScroll = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 500) && ($(this).offset().top >= $(window).height())) {
      $(this).addClass('slideUp');
    }
  });
});

$('#nav-top').click(function() {
  $('html, body').animate({
    scrollTop: ($('body').offset().top)
  }, 750);
});
$('.exitPage').click(function() {
  var href = $(this).attr('data-href');
  $('#loader').css('width', '100vw');
  $('body').css('overflow', 'hidden');
  setTimeout(function(){window.location.href = href;}, 750);
});
$('#lol').click(function() {
  clicked++;
  if(clicked == 1){
    options.particles.number.value = 100;
    $('#lol').text("OKAY, I already told you not to.");
  }else if(clicked == 2){
    options.particles.size.value = 10;
    $('#lol').text("Please bring me back.");
  }else if (clicked == 3){
    options.particles.number.value = 15;
    options.particles.size.value = 2.5;
    $('#lol').text("Please don't click this again.");
    clicked = 0;
  }
  particlesJS("particle", options);
});
var options = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: !0,
        value_area: 500
      }
    },
    color: {
      value: ["d44b53", "4fdace"]
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
      enable: false,
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
        distance: 100,
        line_linked: {
          opacity: .5
        }
      }
    }
  },
  retina_detect: !1
};
particlesJS("particle", options);
});

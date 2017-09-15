
var scroll;
$(document).ready(function() {
  console.log('Designed and Developed by Su Li 2017🍐');
  $('.proj-item').each(function() {
    // var index = $('.proj-item').index(this) + 1;
    var url = 'url(files/thumbnails/' + 1 + '.png)';
    $(this).css('background-image', url);
  });
});
//projscontrols

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

// $(window).scroll(function() {
//   $('.container').each(function(i) {
//     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//     if (bottom_of_window > bottom_of_object) {
//       $(this).addClass('slideUp');
//     }
//   });
// });


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

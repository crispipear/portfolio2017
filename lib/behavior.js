
var scroll;
$(document).ready(function() {
  console.log('Designed and Developed by Su Li 2017🍐');
  $('.proj-item').each(function() {
    var index = $('.proj-item').index(this) + 1;
    var url = 'url(files/thumbnails/' + index + '.png)';
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
//scroll control
(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if (delay) return;
    delay = true;
    setTimeout(function() {
      delay = false
    }, 250)

    var scrollDir = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var section = document.getElementsByTagName('section');
    if (scrollDir < 0) {
      for (var i = 0; i < section.length; i++) {
        var t = section[i].getClientRects()[0].top;
        if (t >= 40) break;
      }
    } else {
      for (var i = section.length - 1; i >= 0; i--) {
        var t = section[i].getClientRects()[0].top;
        if (t < -20) break;
      }
    }
    if (i >= 0 && i < section.length) {
      $('html,body').animate({
        scrollTop: section[i].offsetTop
      }, 750);
    }
  });
})();
$(window).scroll(function() {
  $('.content').each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
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
      value: "#9fb6e2"
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

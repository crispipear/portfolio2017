var scroll;
$(document).ready(function() {
  $('#footer span').html("2018 &copy; Design and Development by Su Li");
  console.log('Designed and Developed by Su Li 2017🍐');

$(window).scroll(function() {
  $('.container').each(function(i) {
    var objectScroll = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll >= objectScroll - 500) && ($(this).offset().top >= $(window).height())) {
      $(this).addClass('slideUp');
    }
  });
});
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

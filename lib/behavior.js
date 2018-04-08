
var scroll;
var i = 0;
var typing = ' ';
var typestatus = 0;
var projIndex = 0;



$(document).ready(function() {
  console.log('Designed and Developed by Su Li 2017🍐');
  $('.bubble').first().addClass("chat").delay(750).queue(function(){
    $('.bubble:nth-child(2)').addClass("chat").delay(1050).queue(function(){
      $('.bubble:nth-child(3)').addClass("chat").delay(1050).queue(function(){
        $('.bubble:nth-child(4)').addClass("chat").delay(1250).queue(function(){
          $('.bubble:nth-child(5)').addClass("chat").delay(1000).queue(function(){
            $('.about').addClass("chat");
          });;;
        });;
      });;
    });;
  });


  $('.proj-item').each(function() {
    var index = this.id;
    var url = 'url(files/thumbnails/' + index + '.png)';
    $(this).css('background-image', url);
  });
  $("div.proj-des:not(:first)").hide();
  $(".counter div").first().css("background-color", "#7592cb");
});

  $('.item img').click(function(){
    var img = $(this).attr('src');
    var des = $(this).attr('alt');
    $('.modal').css('opacity','1');
    $('.modal').css('z-index','100');
    $('.modal-img img').attr("src", img);
    $('.modal-des').text(des);
  });
  $('#modal-close').click(function(){
    $('.modal').css('opacity','0');
    $('.modal').css('z-index','-1');
  });
  $('.modal').click(function(){
    $('.modal').css('opacity','0');
    $('.modal').css('z-index','-1');
  })
  $('.proj-des a').click(function() {
    $('#load').css('width', '100%')
  });
  $('.arrows').click(function() {
    if (this.id == "a-left") {
      projIndex--;
      if (projIndex < 0) {
        projIndex = $('.proj-des').length-1;
      }
    } else if (this.id == "a-right") {
      projIndex++;
      if(projIndex > $('.proj-des').length-1){
        projIndex = 0;
      }
    }
    updateProjEl();
  });
  $('.counter div').click(function() {
    projIndex = $('.counter div').index(this);
    updateProjEl();
  });

  function updateProjEl() {
    $('.counter div').css('background-color', '#dddddd');
    var counter = $('.counter div').get(projIndex);
    $(counter).css('background-color', '#7592cb');
    var item = $('.proj-des').get(projIndex);
    $("#projNum").text("0" + (projIndex + 1));
    $('.proj-des').hide();
    $(item).show();
    $(item).addClass('fadeIn');
  }
  $('#scroll').click(function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
    }, 750);
  });
  $('#scroll2').click(function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
    }, 750);
  });
  $('#nav-top').click(function() {
    $('html, body').animate({
      scrollTop: ($('body').offset().top)
    }, 750);
  });
  $('#nav-vd').click(function() {
    $('html, body').animate({
      scrollTop: ($('#projs2').offset().top)
    }, 750);
  });
  $('#nav-ixd').click(function() {
    $('html, body').animate({
      scrollTop: ($('#projs').offset().top)
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

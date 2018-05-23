
var scroll;
var i = 0;
var typing = ' ';
var typestatus = 0;
var projIndex = 0;



$(document).ready(function() {
  resizeUpdate();
  $('#footer span').html("2018 &copy; Design and Development by Su Li");
  console.log('Designed and Developed by Su Li 2017🍐');
  $(window).resize(function(){
    resizeUpdate();
  });

  function resizeUpdate(){
    if($(window).width() < 1023){
      $('.bubbles').removeClass("col-6").addClass("col-12");
      $('.about').removeClass("col-6").addClass("col-12");
      $('.proj-item').removeClass("col-7").addClass("col-12");
      $('.proj-info').removeClass("col-5").addClass("col-12");
    }else{
      $('.bubbles').removeClass("col-12").addClass("col-6");
      $('.about').removeClass("col-12").addClass("col-6");
      $('.proj-item').removeClass("col-12").addClass("col-7");
      $('.proj-info').removeClass("col-12").addClass("col-5");

    }
  }

  $('.proj-item').each(function() {
    var index = this.id;
    var url = 'url(files/thumbnails/' + index + '.png)';
    $(this).css('background-image', url);
  });
  $("div.proj-des:not(:first)").hide();
  $(".counter div").first().css("background-color", "#4fdace");
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
    $('.counter div').css('background-color', '#4b4b4b');
    var counter = $('.counter div').get(projIndex);
    $(counter).css('background-color', '#4fdace');
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
      value: 15,
      density: {
        enable: !0,
        value_area: 500
      }
    },
    color: {
      value: ["d44b53","4fdace"]
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

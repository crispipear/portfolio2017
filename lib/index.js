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
  },
  {
    name: "Anti-Establishment",
    type: "marketing campaign, arg",
    des: "Identity created for an alternate reality game that centers around the topic of climate change.",
    img: "imdy_tn.png",
    href: "antiestablishment.html"
  }
];
var currentIndex = 0;
$(document).ready(function(){
  drawBg();
  $.each(projects, function(key, val){
    var item = "<h3><span class='focus'>&#x27F6; </span><span>0"+ (key+1) +"</span> "+val.name+"</h3>";
    $('.proj-menu div').append(item);
  });
  updateProj(projects[0].name);
  $('.proj-menu h3').on('click', function(){
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
  $('.proj-des a').on('click', function() {
    $('#load').css('width', '100%')
  });
  $('#nav-about').on('click', function() {
    $('html, body').animate({
      scrollTop: ($('#about').offset().top)
    }, 750);
  });

  $('#nav-ixd').on('click', function() {
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
    $('.proj-menu h3').css('color', '#121212');
    $('.proj-menu h3').find('span').css('color', '#121212');
    $('.proj-menu h3').find('.focus').css('opacity', '0');
    $(proj).css('transform', 'scale(1.5)');
    $(proj).find('.focus').css('opacity', '1');
    $(proj).css('color', '#5888f4');
    $(proj).find('span').css('color', '#5888f4');
  }


});

function drawBg() {
  var canvasInteractive = document.getElementById('canvas-interactive');
  var canvasReference = document.getElementById('canvas-reference');
  var contextInteractive = canvasInteractive.getContext('2d');
  var contextReference = canvasReference.getContext('2d');

  var image = document.getElementById('img');

  var width = canvasInteractive.width = canvasReference.width = window.innerWidth;
  var height = canvasInteractive.height = canvasReference.height = window.innerHeight;

  var logoDimensions = {
    x: 750,
    y: 750
  };

  var center = {
    x: width / 2,
    y: height / 2
  };

  var logoLocation = {
    x: center.x - logoDimensions.x / 2,
    y: center.y - logoDimensions.y / 2
  };

  var mouse = {
    radius: Math.pow(50, 2),
    x: 0,
    y: 0
  };

  var particleArr = [];
  var particleAttributes = {
    friction: 0.95,
    ease: 0.25,
    spacing: 5.5,
    size: 1,
    color: "#121212"
  };

  function Particle(x, y) {
    this.x = this.originX = x;
    this.y = this.originY = y;
    this.rx = 0;
    this.ry = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
  }

  Particle.prototype.update = function() {
    this.rx = mouse.x - this.x;
    this.ry = mouse.y - this.y;
    this.distance = this.rx * this.rx + this.ry * this.ry;
    this.force = -mouse.radius / this.distance;
    if (this.distance < mouse.radius) {
      this.angle = Math.atan2(this.ry, this.rx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    }
    this.x += (this.vx *= particleAttributes.friction) + (this.originX - this.x) * particleAttributes.ease;
    this.y += (this.vy *= particleAttributes.friction) + (this.originY - this.y) * particleAttributes.ease;
  };

  function init() {
    contextReference.drawImage(image, logoLocation.x, logoLocation.y);
    var pixels = contextReference.getImageData(0, 0, width, height).data;
    var index;
    for (var y = 0; y < height; y += particleAttributes.spacing) {
      for (var x = 0; x < width; x += particleAttributes.spacing) {
        index = (y * width + x) * 4;
        if (pixels[++index] > 0) {
          particleArr.push(new Particle(x, y));
        }
      }
    }
  };
  init();

  function update() {
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      p.update();
    }
  };

  function render() {
    contextInteractive.clearRect(0, 0, width, height);
    for (var i = 0; i < particleArr.length; i++) {
      var p = particleArr[i];
      contextInteractive.fillStyle = particleAttributes.color;
      contextInteractive.fillRect(p.x, p.y, particleAttributes.size, particleAttributes.size);
    }
  };

  function animate() {
    update();
    render();
    requestAnimationFrame(animate);
  }
  animate();
  document.body.addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  document.body.addEventListener("touchstart", function(event) {
    mouse.x = event.changedTouches[0].clientX;
    mouse.y = event.changedTouches[0].clientY;
  }, false);

  document.body.addEventListener("touchmove", function(event) {
    event.preventDefault();
    mouse.x = event.targetTouches[0].clientX;
    mouse.y = event.targetTouches[0].clientY;
  }, false);

  document.body.addEventListener("touchend", function(event) {
    event.preventDefault();
    mouse.x = 0;
    mouse.y = 0;
  }, false);


}

$(window).resize(function() {
  $('#particle div').empty();
  let newEl = '<canvas id="canvas-interactive"></canvas><canvas id="canvas-reference"></canvas>';
  $('#particle div').append(newEl);
  drawBg();
});

 $(document).ready(function() {

  var parPosition = [];
  
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        
    $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
        
          $('.vNav ul li a').click(function () {
      $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    }); 
        
       $('.vNav a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        });
        
          $('.vNav ul li a').click(function () {
      $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    });   

$('.close').click(function(){
      $('.node').animate({'opacity': '0'}, 600);
      $('.node').animate({'z-index': '-2300'}, 601);
    });

  

/*$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
$('.sliding-panel-button1,.sliding-panel-fade-screen1,.sliding-panel-close1').on('click',function (e) {
    $('.sliding-panel-content1').toggleClass('is-visible');
    $('.sliding-panel-fade-screen1').toggleClass('is-visible');
    e.preventDefault();
  });*/




/*  var isClicked = true;

$('#js-mobile-menu').on('click', function(){
  if(isClicked){
    $(this).css('background', '');
    $(this).addClass('js-mobile-menu-clicked');
    isClicked = false;
    }else{
      $(this).removeClass('js-mobile-menu-clicked');
      $(this).css('ackground', 'url(http://imgh.us/1438443780_menu-alt.svg) no-repeat');
      isClicked = true;
      }
  });*/

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();


/*var fade = function(){$(this).closest(this).find('text').fadeIn('fast');};
var fade3 = function(){$('li').closest(this).find('text').fadeOut('fast');};

    $('li').on('mouseenter', fade);
    $('li').on('mouseleave', fade3);*/

/*$( document ).ajaxStart(function() {
  
});*/

/*$('.ajax').on('click', function(){
    $.ajax('ajax.html', {
      success: function (response){
          $('.ajax').html(response).slideDown();
          $('.ajax').css('padding', '0');
      }, 
      error: function(request,errorType,errorMessage){console.log('Error: ' + errorType + ' with message: ' + errorMessage);},
      timeout: 5000,
      beforeSend: function(){$('.isLoading').slideDown('fast');},
      complete: function(){$('.isLoading').hide();}
    });
  });*/

/*var par = function(){$('li').find('#p').animate({'margin-left': '30px'});};

    $('.page-header, section').on('touchstart', par);
    $('.page-header, section').on('mouseenter', par);*/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 550);
        return false;
      }
    }
  });
});




$(function() {
  /** -----------------------------------------
   * Modulo del Slider 
   -------------------------------------------*/
   var SliderModule = (function() {
    var pb = {};
    pb.el = $('#slider');
    pb.items = {
      panels: pb.el.find('.slider-wrapper > li'),
    }

    // Interval del Slider
    var SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length;

    // Constructor del Slider
    pb.init = function(settings) {
      this.settings = settings || {duration: 15000};
      var items = this.items,
        lengthPanels = items.panels.length,
        output = '';

      // Insertamos nuestros botones
      for(var i = 0; i < lengthPanels; i++) {
        if(i == 0) {
          output += '<li class="active"></li>';
        } else {
          output += '<li></li>';
        }
      }

      $('#control-buttons').html(output);

      // Activamos nuestro Slider
      activateSlider();
      // Eventos para los controles
      $('#control-buttons').on('click', 'li', function(e) {
        var $this = $(this);
        if(!(currentSlider === $this.index())) {
          changePanel($this.index());
        }
      });

    }

    // Funcion para activar el Slider
    var activateSlider = function() {
      SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
    }

    // Funcion para la Animacion
    pb.startSlider = function() {
      var items = pb.items,
        controls = $('#control-buttons li');
      // Comprobamos si es el ultimo panel para reiniciar el conteo
      if(nextSlider >= lengthSlider) {
        nextSlider = 0;
        currentSlider = lengthSlider-1;
      }

      controls.removeClass('active').eq(nextSlider).addClass('active');
      items.panels.eq(currentSlider).fadeOut('slow');
      items.panels.eq(nextSlider).fadeIn('slow');

      // Actualizamos los datos del slider
      currentSlider = nextSlider;
      nextSlider += 1;
    }

    // Funcion para Cambiar de Panel con Los Controles
    var changePanel = function(id) {
      clearInterval(SliderInterval);
      var items = pb.items,
        controls = $('#control-buttons li');
      // Comprobamos si el ID esta disponible entre los paneles
      if(id >= lengthSlider) {
        id = 0;
      } else if(id < 0) {
        id = lengthSlider-1;
      }

      controls.removeClass('active').eq(id).addClass('active');
      items.panels.eq(currentSlider).fadeOut('slow');
      items.panels.eq(id).fadeIn('slow');

      // Volvemos a actualizar los datos del slider
      currentSlider = id;
      nextSlider = id+1;
      // Reactivamos nuestro slider
      activateSlider();
    }

    return pb;
   }());

   SliderModule.init({duration: 8000});

});
});


/*Contact Effect*/

var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = new Array();
var rint = 80;

$(document).ready(function(){
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  $('#container').width(WIDTH).height(HEIGHT);
  canvas = document.getElementById('pixie');
  $(canvas).attr('width', WIDTH).attr('height',HEIGHT);
  con = canvas.getContext('2d');
  for(var i = 0; i < 100; i++) {
    pxs[i] = new Circle();
    pxs[i].reset();
  }
  setInterval(draw,rint);


});

function draw() {
  con.clearRect(0,0,WIDTH,HEIGHT);
  for(var i = 0; i < pxs.length; i++) {
    pxs[i].fade();
    pxs[i].move();
    pxs[i].draw();
  }
}

function Circle() {
  this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

  this.reset = function() {
    this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
    this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
    this.r = ((this.s.rmax-1)*Math.random()) + 1;
    this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
    this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
    this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
    this.rt = Math.random()*this.hl;
    this.s.rt = Math.random()+1;
    this.stop = Math.random()*.2+.4;
    this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
  }

  this.fade = function() {
    this.rt += this.s.rt;
  }

  this.draw = function() {
    if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
    else if(this.rt >= this.hl) this.reset();
    var newo = 1-(this.rt/this.hl);
    con.beginPath();
    con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    con.closePath();
    var cr = this.r*newo;
    g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
    g.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
    g.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*.6)+')');
    g.addColorStop(1.0, 'rgba(77,101,181,0)');
    con.fillStyle = g;
    con.fill();
  }

  this.move = function() {
    this.x += (this.rt/this.hl)*this.dx;
    this.y += (this.rt/this.hl)*this.dy;
    if(this.x > WIDTH || this.x < 0) this.dx *= -1;
    if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
  }

  this.getX = function() { return this.x; }
  this.getY = function() { return this.y; }
}
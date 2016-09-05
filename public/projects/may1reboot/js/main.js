$('.main-portfolio-items-item').hover(function(){
	$(this).find('.main-portfolio-items-item-hiddable').closest('.main-portfolio-items-item-hiddable').slideUp();
	$(this).find('.main-portfolio-items-item-showable').closest('.main-portfolio-items-item-showable').slideDown();
},function(){
	$(this).find('.main-portfolio-items-item-hiddable').closest('.main-portfolio-items-item-hiddable').slideDown();
	$(this).find('.main-portfolio-items-item-showable').closest('.main-portfolio-items-item-showable').slideUp();
});

/*MENU*/
var body = $('body');
var menuBtn = $('#menuOpenBtn, #menuOpenLine');
var menuClose = $('#menuCloseBtn');
var nav = $('#mainNav');

menuBtn.mouseenter(function(){
	nav.css('right', '0px');
	body.css('left', '-200px');
	$("#postUpBtn").removeClass("postUpBtnFixed");
});

menuClose.click(function(){
	nav.css('right', '-200px');
	body.css('left', '0px');
	$("#postUpBtn").addClass("postUpBtnFixed");
});

$('main, header, canvas').mouseenter(function(){
	nav.css('right', '-200px');
	body.css('left', '0px');
});

/*SMOOTH SCROLLING*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


//BLOG POST ANIMATION
$('.blog-container article').hover(function(){
	$(this).find('.title').addClass('animated flipInX');
	$(this).find('.blog-short-description').addClass('animated slideInUp');
	$(this).find('hr').addClass('animated fadeIn');
},function(){
	$(this).find('.title').removeClass('animated flipInX');
	$(this).find('.blog-short-description').removeClass('animated slideInUp');
	$(this).find('hr').removeClass('animated fadeIn');
});

//PORTFOLIO ITEM HOVER ANIMATION
$('.large-portfolio-item, .medium-portfolio-item, .small-portfolio-item').hover(function(){
	$(this).find('.title').css('display', 'block');
	$(this).find('.title').addClass('animated fadeInDown');
	$(this).find('.title').find('span').addClass('title-visible');
	$(this).find('.project-short-description').css('display', 'block');
	$(this).find('.project-short-description').addClass('title-visible');
	$(this).find('.project-short-description').addClass('animated fadeIn');
	$(this).find('.project-links').css('display', 'flex');
	$(this).find('.project-links').addClass('animated flipInX');
},function(){
	$(this).find('.title').find('span').removeClass('title-visible');
	$(this).find('.title').removeClass('animated fadeInDown');
	$(this).find('.title').css('display', 'none');
	$(this).find('.project-short-description').removeClass('title-visible');
	$(this).find('.project-links').removeClass('animated flipInX');
	$(this).find('.project-short-description').css('display', 'none');
	$(this).find('.project-links').css('display', 'none');
});


// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = pageYOffset,
            scroll = false,
            scrollY,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            if (!scroll) root = window.pageYOffset;
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            if (!scroll) root = window.pageYOffset;
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);

jQuery.scrollSpeed(100, 800);

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("#postUpBtn").addClass("postUpBtnFixed");
    }

    if (scroll <= 200) {
        $("#postUpBtn").removeClass("postUpBtnFixed");
    }
});
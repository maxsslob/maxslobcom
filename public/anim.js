$(document).ready(function(){
	var headerh1 = $('header h1 a');
	var headerhr = $('header hr');
	var headerh2 = $('header h2');
	setTimeout(function(){headerh1.addClass('fadeIn');}, 300);
	setTimeout(function(){headerhr.addClass('fadeIn');}, 400);
	setTimeout(function(){headerh2.addClass('fadeIn');}, 500);

	// MAIN
	var me = $('.me');
	var t = $('.t');
	var c = $('.c');
	var b = $('.b');
	var l = $('.l');
	setTimeout(function(){t.addClass('fadeIn');}, 800);
	setTimeout(function(){c.addClass('fadeIn');}, 500);
	setTimeout(function(){me.addClass('zoomIn').css('opacity', '1');}, 800);
	setTimeout(function(){b.addClass('fadeIn');}, 800);
	setTimeout(function(){l.addClass('fadeIn');}, 1200);

	// FOOTER
	var animLeft = $('.anim-left');
	var animRight = $('.anim-right');
	var animCenter = $('.anim-center');
	setTimeout(function(){animLeft.addClass('fadeInUp');}, 1200);
	setTimeout(function(){animRight.addClass('fadeInUp');}, 1600);
	setTimeout(function(){animCenter.addClass('fadeInUp');}, 1400);
});
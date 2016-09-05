$('.plan').mouseenter(function() {
	$(this).addClass('animated tada');
});

$('.plan').mouseleave(function() {
	$(this).removeClass('animated tada');
});


$('#menuOpenBtn').click(function(){
	$('.mobile-nav ul').slideToggle();
});

$('.item1, .item2, .item3').addClass('animated').css('position', 'relative');

var bool = true;

	$('#first-scene').addClass('animated tada');
	
	$('#first-scene').mouseenter(function(){

		$('#first-scene .item1 span').addClass('animated fadeOutDown');
		$('#first-scene .item1 p').addClass('animated fadeOutDown');
		setTimeout(function(){
			$('#first-scene').hide();
			$('#second-scene').show();
			$('#second-scene .item1, #second-scene .item2').hide();
			setTimeout(function(){
				$('#second-scene .item1, #second-scene .item2').show();
				$('#second-scene .item1').addClass('animated fadeInLeft');
				$('#second-scene .item2').addClass('animated fadeInRight');
				setTimeout(function(){
					$('#second-scene .item1').animate({'right':'-318px'});
					$('#second-scene .item2').animate({'left':'-318px'});
					$('#second-scene .item1').animate({'right':'-518px'});
					$('#second-scene .item2').animate({'left':'-478px'});
					$('#second-scene .item1 span , #second-scene .item2 span').fadeIn();
					$('#second-scene .item1 span').addClass('animated fadeInLeft');
					$('#second-scene .item2 span').addClass('animated fadeInRight');
					setTimeout(function(){
						$('#second-scene').fadeOut();
						setTimeout(function(){
							$('#third-scene').fadeIn();
							$('#third-scene img').hide();
						}, 500);
						setTimeout(function(){
							$('#third-scene img').show();
							$('#third-scene img').addClass('animated fadeInUp');
						}, 1000)
					}, 1800);
				}, 1500);
			}, 1000);

		}, 700);
		
	});
		
$('#slideBtn4').click(function(){
	$('#third-scene').fadeOut('fast');
	setTimeout(function(){$('#fourth-scene').fadeIn('fast')}, 500);
});






$( "#fourth-scene img" ).draggable();
$( "#zone" ).droppable({  drop: function() {  alert( "dropped" );  }});
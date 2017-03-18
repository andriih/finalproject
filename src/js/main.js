$(window).scroll(function(){
	var st  = $(this).scrollTop();

	$('.parallax__area__title').css({
		"transform":"translate(0%, "+st / 8+"%"
	});
	$('.parallax__area__carousel').css({
		"transform":"translate(0%, "+st / 6 +"%"
	});
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


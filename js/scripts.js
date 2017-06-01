
/***************** Icons fade in on scroll down ******************/
//
$(window).scroll(function () {
    var y = $(window).scrollTop(),
        x = $('.animated').offset().top - 950;
    if (y > x) {
        $('.animated').addClass('fadeInUp').removeClass('fadeOutDown');
    } else {
        $('.animated').removeClass('fadeInUp').addClass('fadeOutDown');
    }
});

/***************** Waypoints ******************/

// $(document).ready(function() {
//
// 	$('.wp1').waypoint(function() {
// 		$('.wp1').addClass('animated fadeInLeft');
// 	}, {
// 		offset: '75%'
// 	});
// 	$('.wp2').waypoint(function() {
// 		$('.wp2').addClass('animated fadeInUp');
// 	}, {
// 		offset: '75%'
// 	});
// 	$('.wp3').waypoint(function() {
// 		$('.wp3').addClass('animated fadeInDown');
// 	}, {
// 		offset: '55%'
// 	});
// 	$('.wp4').waypoint(function() {
// 		$('.wp4').addClass('animated fadeInDown');
// 	}, {
// 		offset: '75%'
// 	});
// 	$('.wp5').waypoint(function() {
// 		$('.wp5').addClass('animated fadeInUp');
// 	}, {
// 		offset: '75%'
// 	});
// 	$('.wp6').waypoint(function() {
// 		$('.wp6').addClass('animated fadeInDown');
// 	}, {
// 		offset: '75%'
// 	});
//
// });


/***************** Fix image resize on mobile scroll ******************/
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('#index-bg').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

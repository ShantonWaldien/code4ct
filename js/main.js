/**** Back to top button function *****/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**** Stats Counter Function *****/

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

/**** Carousel Function *****/

$(document).ready(function(){
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

/**** Circle Progress Bar Function *****/

var progressBarOptions = {
	startAngle: 5.55,
	size: 100,
    value: 0.85,
    fill: {
		color: '#E69286'
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	//$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
	value : 0.90,
	fill: {
		color: '#E69286'
	}
});

$('#circle-c').circleProgress({
	value : 0.80,
	fill: {
		color: '#E69286'
	}
});

$('#circle-d').circleProgress({
	value : 0.97,
	fill: {
		color: '#E69286'
}
});
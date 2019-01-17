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

// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

// Trigger Stat Counter

// $(document).on('scroll', function() {

//     if( $(this).scrollTop() >= $('.counter-section').position().top ){

//         $('.count').each(function () {
//             $(this).prop('Counter',0).animate({
//                 Counter: $(this).text()
//             }, {
//                 duration: 2000,
//                 easing: 'swing',
//                 step: function (now) {
//                     $(this).text(Math.ceil(now));
//                 }
//             });
//         });
//     }
// });

// function elementInView(elem){
//     return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
//   };
  
//   $(window).scroll(function(){
//     if (elementInView($('.counter-section')))
//     //fire at will!

//     $('.count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 2000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//   });

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

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
// Passive event listeners
jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchstart", handle, {
			passive: !ns.includes("noPreventDefault")
		});
	}
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchmove", handle, {
			passive: !ns.includes("noPreventDefault")
		});
	}
};

// Preloader js
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });


  //  Search Form Open
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
    setTimeout(function () {
      $('.search-box').focus();
    }, 400);
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });


  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

})(jQuery);
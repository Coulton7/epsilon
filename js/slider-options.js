(function($) {
  $(document).ready(function() {

    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false

    });

    $('.controlNav').flexslider({
      controlNav: true,
      directionNav: false
    });

    $('.carousel-slider').flexslider({
      controlNav: false,
      directionNav: true,
      animation: "slide",
      easing: "swing",
      animationLoop: true,
      pauseOnHover: true,
      itemWidth: 210,
      itemMargin: 20,
      minItems: 4,
      maxItems: 4,
      move: 1

    });

    $('.product-slider').flexslider({
      controlNav: false,
      directionNav: false,
      animation: "fade",
      easing: "swing",
      animationLoop: true,
    });

    $('.directionNav').flexslider({
      controlNav: false,
      directionNav: true
    });

  });
})(jQuery)

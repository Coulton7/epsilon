(function($){
  $(document).ready(function($){
    var imgSrc = $ ('.field-product-image .flexslider .slides li:nth-child(2) img').attr('src');

    $('.block-productenquiry').css('background-image', 'url(' + imgSrc + ')');
  });
})(jQuery);

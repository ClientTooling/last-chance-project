$(document).on("click", ".question_product,.faq_question", function (e) {
  if (jQuery(this).hasClass("active")) {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  } else {
    jQuery('.question_product,.faq_question').removeClass('active');
    jQuery('.question_product,.faq_question').next().slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  }
});



$(document).on("click", ".custom_button", function (e) {
    var video = jQuery(this).parents('.video_wrapper_custom').find('video');
if (jQuery(this).hasClass("active")) {
   //jQuery(this).parents('.video_wrapper_custom').removeClass('video-active');
    //jQuery(this).removeClass('active');
//video.trigger('pause');
} else {
video.trigger('play');
  jQuery(this).parents('.video_wrapper_custom').addClass('video-active');
    jQuery(this).addClass('active');
}
});


$(document).on("click", 'button.tap-area[is="carousel-next-button"]', function (e) {
var next_slide = $('product-gallery.product-gallery.starapps .product-gallery__thumbnail[aria-current=true]+.product-gallery__thumbnail');
if( next_slide.length ){
next_slide.trigger('click');
} else {
$('.product-gallery__thumbnail[data-media-position="0"]').trigger('click'); 
}
});
$(document).on("click", 'button.tap-area[is="carousel-prev-button"]', function (e) {
var next_slide = $('product-gallery.product-gallery.starapps .product-gallery__thumbnail:has(+.product-gallery__thumbnail[aria-current=true])');
if( next_slide.length ){
next_slide.trigger('click');
} else {
$('.product-gallery__thumbnail:last-child').trigger('click'); 
}
});



$(document).on("click", '.search_trigger_button', function (e) {
var text = $(this).prev().val();
text = text.trim();
text = text.replace(" ", "+");
var link = $(this).parents('.header_custom_search').prev().attr('href');
var new_link = link+'?q='+text;
  location.href=new_link;
});


$('.header_custom_search input').keypress(function (e) {
if (e.which == '13') {
 $(this).next().trigger('click');
}});



$(document).on("click", "a[href='#reviews']", function (e) {
  e.preventDefault();
  document.querySelector('#reviews_main').scrollIntoView({
    behavior: 'smooth'
  })
});


$(document).on("click", "a[href='#']", function (e) {
  e.preventDefault();
  document.querySelector('.product_lp_main').scrollIntoView({
    behavior: 'smooth'
  })
});
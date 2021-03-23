
$(function(){
  $('.image-link').viewbox({
    setTitle: true,
    margin: 20,
    resizeDuration: 300,
    openDuration: 200,
    closeDuration: 200,
    closeButton: true,
    fullscreenButton: false,
    navButtons: true,
    closeOnSideClick: true,
    nextOnContentClick: false,
    useGestures: true
  });
});


$( document ).ready(function() {

$('.doctors-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<span class="prevArrow"><i class="fa fa-angle-left"></span>',
  nextArrow: '<span class="nextArrow"><i class="fa fa-angle-right"></span>',
  autoplay:true,
  autoplaySpeed:3500,
  arrows:true,
  dots:false,
  pauseOnHover:false,
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    
    }
  ]
});

});


jQuery(window).on("load",function() {
  jQuery(window).scroll(function() {
    var windowBottom = jQuery(this).scrollTop() + jQuery(this).innerHeight();
    jQuery(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = jQuery(this).offset().top + jQuery(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if (jQuery(this).css("opacity")==0) {jQuery(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if (jQuery(this).css("opacity")==1) {jQuery(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$( document ).ready(function() {

$( ".hamburger" ).click(function() {
$( ".main-menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
$( ".book-appointment" ).show();

});
});

$( ".cross" ).click(function() {
$( ".main-menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".book-appointment" ).hide();
$( ".hamburger" ).show();
});
});


});



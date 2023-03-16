jQuery(document).ready(function(){

$('.center').slick({
  centerMode: true,
  centerPadding: '90px',
  arrows:false,
  slidesToShow: 3
});


 jQuery(function(){
  jQuery("#header").load("../TenTwenty_test/templates/header.html"); 
  jQuery("#footer").load("../TenTwenty_test/templates/footer.html"); 
});

 jQuery(".contact-btn").hover(function(){
  jQuery(this).find('img').css("right", "10px");
  }, function(){
  jQuery(this).find('img').css("right", "16px");
});

 $('.slider-nav').slick({
    pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
    autoplay: true,
    autoplaySpeed:5000,
  focusOnSelect: true,
    arrows: false,
    appendDots: $('.slider-dots-box'),
    dotsClass: 'slider-dots',
});

// On before slide change
$('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider-dots-box button').html('');
}).trigger('beforeChange');

// On before slide change
$('.slider-nav').on('afterChange', function(event, slick, currentSlide){
  $('.slider-dots-box button').html('');
     $('.slider-dots-box .slick-active button')
         .html(`<svg viewBox="2 2 40 40" class="circular-chart">
  <path class="rectangle"
    stroke-dasharray="360, 720"
    d="M 0 2 L 35 2 L 35 35 L 2 35 L 2 2"
  />
</svg>`);
         
}).trigger('afterChange');


 $('.slider-dots li:nth-of-type(1) button').css("background" , "url(../assets/images/img2.jpg)");
 $('.slider-dots li:nth-of-type(2) button').css("background" , "url(../assets/images/img3.jpg)");
 $('.slider-dots li:nth-of-type(3) button').css("background" , "url(../assets/images/img1.jpg)");

    $(".slider-dots li").append('<a class="cu-next">Next</a>');
      $('.cu-next').click(function(){
    $(".slider-nav").slick('slickNext');
});


      var $slider = $('.slider-nav');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');


  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/3');
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}



});



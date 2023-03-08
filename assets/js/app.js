$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if(scroll > 400) {
            $('.back_to_top').fadeIn()
            $('.navbar').addClass('nav_bg_sticky')
        }
        else {
            $('.back_to_top').fadeOut()
            $('.navbar').removeClass('nav_bg_sticky')
        }
    });

    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0});
    });

    // mixitup activation code
	var mixer = mixitup('.myfilter');
});


// Wow JS Activation

new WOW().init();


// Swiper JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
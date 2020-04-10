$(document).ready(function(){
    $(".main-banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000, 
        speed: 2000
    });
    window.addEventListener('DOMContentLoaded', pageLoad);
});
function pageLoad(){
    scrollPage();
    $( '.section.home-container' ).addClass('animation-done');
}
function scrollPage(){
    var slide = $( '.section' );
    var slideInfo = $( '.info-section' );
    $(window).scroll(function() {
        $( slide ).each(function() {
            let curSlide = $(this);
            let slidePosition = curSlide.offset().top;
            let slideHeight = $(this).height();
            if($(window).scrollTop()>=(slidePosition-(slideHeight/2))){
                $(this).addClass('animation-done');
            };
        });
        $( slideInfo ).each(function() {
            let curSlide = $(this);
            let slidePosition = curSlide.offset().top;
            let slideHeight = $(this).height();
            let sum = slidePosition-(slideHeight*1.7);
            if($(window).scrollTop()>=sum){
                $(this).addClass('animation');
            };
            console.log(slideHeight/2)
        });
        
    });
}
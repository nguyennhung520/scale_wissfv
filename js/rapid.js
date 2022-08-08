$(function(){

    $('.wrapper_question').click(function(){
        $(this).parent().siblings('li').children('p').slideUp(1000)
        $(this).parent().siblings('li').children('div').attr('data-status', 'close')

        if(($(this).attr('data-status')) == 'close' ){
            $(this).attr('data-status', 'open')
            $(this).next('p').slideDown(500)
        }else{
            $(this).attr('data-status', 'close')
            $(this).next('p').slideUp(500) 
        }

    })
})


$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});
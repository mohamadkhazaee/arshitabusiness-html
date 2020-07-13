$(document).ready(function () {
    /////////////////////////////////////////////////////
    ///main menu toggle
    //////////////////////////////////////////////////////
    $('.res-btn-toggle').click(function(){
        $('.main-header-menu').toggleClass('main-header-menu-toggle')
    })
    $('.main-header-menu-btn-toggle').click(function(){
        $('.main-header-menu').toggleClass('main-header-menu-toggle')
    })
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
        $('header').addClass("hide-header")
       } else {
        $('header').removeClass("hide-header")
       }
       lastScrollTop = st;
    });
    $('.search-popup-close button').click(function(){
        $('.search-popup').toggleClass('search-popup-open')
    })
    $('.main-header-search').click(function(){
        $('.search-popup').toggleClass('search-popup-open')
    })















    ////////////////////////////////////////////////////////////////
                    ////main owl slider 


                    $('.main-owl').owlCarousel({
                        loop:true,
                        margin:10,
                        nav:true,
                        rtl:true,
                        responsive:{
                            0:{
                                items:1
                            }
                        }
                    })

               














   /////////////////////////////////////////////////////////////////////////
});
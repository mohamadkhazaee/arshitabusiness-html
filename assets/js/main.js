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
                        dots:true,
                        rtl:true,
                        autoplay:true,
                        autoplayTimeout:5000,
                        responsive:{
                            0:{
                                items:1
                            }
                        }
                    })

///////////////////////////////////////////////////////////////////////
                    ////blog owl
                    $('.blog-owl').owlCarousel({
                        loop:true,
                        margin:10,
                        nav:true,
                        rtl:true,
                        autoplay:true,
                        autoplayTimeout:4000,
                        responsive:{
                            0:{
                                items:1
                            },
                            700:{
                                items:2
                            },
                            1000:{
                                items:3
                            },
                            1200:{
                                items:4
                            }
                        }
                    })
                    














   /////////////////////////////////////////////////////////////////////////
});
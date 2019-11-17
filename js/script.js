$(document).ready(function () {
    
   'use strict'
    
   $(".header").height($(window).height());
    
    $(window).resize(function () {
        
        $(".header").height($(window).height());
        
        $(".slider").each(function () {
        
      $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });
        
    });
    
    // nav bar activ class
    
    $('.list li').click(function (){
       
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // slider trigger
    
    $('.slider').bxSlider({
        auto: true
    });
    
    // header h2 hight meddle
    
    $(".slider").each(function () {
        
      $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        
    });
    
    // smooth scroll to div
    
    $('.list li a').click(function () {
       
        $('html, body').animate({
           
        scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
    });
    
    // our animate slider 
    
    /*
    (function autoSlider() {
        
        $('.slider-test .active').each(function () {
           
            if(!$(this).is(':last-child')) {
              
               $(this).delay(3000).fadeOut(1000, function() {
                  
                   $(this).removeClass('active').next().addClass('active').fadeIn();
                   
                   autoSlider();
               });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function (){
                   
                    $(this).removeClass('active');
                    
                    $('.slider-test div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                });
            };
        });
        
    }());*/
    
    $('.slider-test').bxSlider({
        
        pager: false,
        auto: true,
        controls: false
    });
    
    //
    
    $('.port-sec li').click(function() {
       
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    // Photo Shuffle
    
    mixitup('#container');  
    
    
    //Our Team line Hight fix
    
    $('.our-team .pho-team:not(:first-child) .over-lay').mouseenter(function () {
       
        $(this).css('lineHeight', $(this).height() + 'px');
    });
    
    // Navbar fixed
    
    
   $(window).on('scroll', function () {
      
        
      if ($(window).scrollTop()) {
           
          $('nav').addClass('jqnav');
           
       } else {
           
          $('nav').removeClass('jqnav');
       }
   });
   
    $(".bars i").on('click', function (){
       
        $('nav ul').toggleClass('showing');
    });
      
});














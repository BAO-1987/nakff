$(function () {

  $('.banner__carousel').slick({
    dots: true,
    arrows: false
  });


   $('.about__syncing-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: true,
     asNavFor: '.about__syncing-nav'
   });

   $('.about__syncing-nav').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     asNavFor: '.about__syncing-for',
     dots: false,
     centerMode: true,
     focusOnSelect: true
   });

});
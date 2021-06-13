$(function () {

  $('.banner__carousel').slick({
    dots: true,
    prevArrow: null,
    nextArrow: null,
  });

  $('.tur__carousel').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.reviews__carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: null,
    nextArrow: null,
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });


  // $('.doctors__for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.doctors__nav'
  // });


  // $('.doctors__nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '.doctors__for',
  //   centerMode: true,
  //   focusOnSelect: true,
  // });


});
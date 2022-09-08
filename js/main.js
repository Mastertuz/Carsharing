$(function(){
    
    $('.top__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        fade:true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false
            }
          },
       ]
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
     

    $('.menu__btn').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active');
    });

});
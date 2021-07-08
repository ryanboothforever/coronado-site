$(document).ready(function(){
  
  $('a[href="#"]').click(function(e){
    e.preventDefault();
  });

  // Mobile Nav
  $('.toggle-menu').click(function(){
    var collapse_content_selector = 'header nav';
    $(collapse_content_selector).slideToggle(function(){
    });
  });

  $('.photostream .slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

});

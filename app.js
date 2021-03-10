// Smooth scrolling JQ

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// Close Nav JQ

$( document ).ready(function(){
  $('.button-collapse').sideNav({
        closeOnClick: true
      }
    );
  });

    


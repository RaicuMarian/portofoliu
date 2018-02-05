// Smooth scrolling

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

function closeNav(){
  document.getElementById('mobile-demo').style.left = "500px";
}
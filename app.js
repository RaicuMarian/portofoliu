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


  // Galerie certificari

  const overlay = document.querySelector('.overlay');
  const overlayInner = document.querySelector('.overlay-inner');
  const overlayImage = overlay.querySelector('img');
  const overlayClose = overlay.querySelector('.close');
  

  function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }

  
  overlay.addEventListener('click',function(e){
    // console.log(e.target);
    if (e.target != overlayImage){
      overlay.classList.remove('open')
    }
  })

  function close() {
    overlay.classList.remove('open');
  }

  const items = document.querySelectorAll('.itemGallery');

  items.forEach(item => item.addEventListener('click', handleClick));

  overlayClose.addEventListener('click', close);
 

    


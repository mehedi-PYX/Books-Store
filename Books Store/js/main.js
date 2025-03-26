// $(window).load(function() {
// 	//$("#loading").delay(2000).fadeOut(500);
// 	$("#loading-center").click(function() {
// 	$("#loading").fadeOut(500);
// 	})
// })

$(window).on("load", function() {
  $("#loading").fadeOut(500); // 500ms সময় নিয়ে ফেড আউট হবে
});






$(document).ready(function(){
  
    // Slick Slider
    $('.slider-acitve').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
      });
      
    
    //   Video Popup
      $('.popup-video').magnificPopup({
        type: 'iframe'
      }); 
});


var swiper = new Swiper(".ceo-active", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  loop: true,
  freeMode: false,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
      slidesPerView: 2,
  },
  992: {
      slidesPerView: 3,
  },
  1200: {
      slidesPerView: 3,
  },
  1400: {
      slidesPerView: 4,
  },
},
});


var swiper = new Swiper(".review-active", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".review-dot",
    clickable: true,
  },
  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 3,
    },
    1400: {
        slidesPerView: 4,
    },
},
});

var swiper = new Swiper(".partner-active", {
  slidesPerView: "6",
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
        slidesPerView: 2,
    },
    481: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
        slidesPerView: 4,
    },
    992: {
        slidesPerView: 5,
    },
    1200: {
        slidesPerView: 6,
    },
    1400: {
        slidesPerView: 6,
    },
  },
});



var swiper = new Swiper(".media-active", {
  slidesPerView: "4",
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    481: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 3,
    },
    1400: {
        slidesPerView: 4,
    },
  },
});





// Open the side panel when the button is clicked
function openNav() {
  var sidepanel = document.getElementById("mySidepanel");
  sidepanel.style.width = "300px";  // Set the width to 250px when opened
}

// Close the side panel when the close button is clicked
function closeNav() {
  var sidepanel = document.getElementById("mySidepanel");
  sidepanel.style.width = "0";  // Set the width to 0 when closed
}

// Close the side panel if clicked outside
window.onclick = function(event) {
  if (!event.target.closest(".sidepanel") && !event.target.closest(".openbtn")) {
      closeNav();  // Only close if clicked outside the menu or button
  }
}





$(function () {
  $.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 300,
    animation: 'fade',
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="fas fa-arrow-up"></i>',
    activeOverlay: false,
  });
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);




// Get the form element
const form = document.getElementById('appointment-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', validateForm);

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const date = document.getElementById('date');
  const time = document.getElementById('time');
  const service = document.getElementById('service');
  const notes = document.getElementById('notes');

  // Validate the fields
  let isValid = true;

  // Name
  if (name.value.trim() === '') {
    alert('Please enter your name');
    isValid = false;
  }

  // Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address');
    isValid = false;
  }

  // Phone
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
    alert('Please enter a valid phone number');
    isValid = false;
  }

  // Date
  if (date.value === '') {
    alert('Please select a date');
    isValid = false;
  }

  // Time
  if (time.value === '') {
    alert('Please select a time');
    isValid = false;
  }

  // Service
  if (service.value === '') {
    alert('Please select a service');
    isValid = false;
  }

  // Notes (optional)
  // No validation needed for notes

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
}
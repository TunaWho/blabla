// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
  
  // Add floating hearts animation
  createFloatingElements();
  
  // Add parallax effect on scroll
  window.addEventListener('scroll', handleParallax);
  
  // Add active menu highlighting on scroll
  highlightActiveSection();
});

// Smooth Anchor Scrolling with easing
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  const target = $($.attr(this, "href"));
  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 20
      },
      800,
      'swing'
    );
    
    // Update active menu item
    $('a[href^="#"]').parent().removeClass('is-active');
    $(this).parent().addClass('is-active');
  }
});

// Create floating decorative elements
function createFloatingElements() {
  const hero = document.querySelector('.hero-body');
  if (!hero) return;
  
  for (let i = 0; i < 15; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.style.cssText = `
      position: absolute;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      pointer-events: none;
    `;
    hero.appendChild(element);
  }
}

// Parallax effect
function handleParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero, .divider, .bismillah');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Highlight active section on scroll
function highlightActiveSection() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.hero-menu-desktop a[href*="${sectionId}"]`).forEach(link => {
          document.querySelectorAll('.hero-menu-desktop li').forEach(li => li.classList.remove('is-active'));
          link.parentElement.classList.add('is-active');
        });
      }
    });
  });
}

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});

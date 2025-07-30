
//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute
            ('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
});   

//Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundColor = 'rgba(10,10,10,0.98)':
    navbar.style.backgroundColor = 'rgba(10,10,10,0.98)'
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('lock-scroll');

}


//Loading effect

//Loading effect

window.addEventListener("load", function () {
  var loaderWrapper = document.querySelector(".wrapper");

  if (loaderWrapper) {
    // Wait 1 second (1000ms) before starting the fade-out
    setTimeout(function () {
      loaderWrapper.style.transition = "opacity 1s ease";
      loaderWrapper.style.opacity = "0";

      // Wait for fade-out to finish before removing from layout
      setTimeout(function () {
        loaderWrapper.style.display = "none";
      }, 1200); // matches the 1s transition
    }, 1200); // delay before fade-out starts
  }
});



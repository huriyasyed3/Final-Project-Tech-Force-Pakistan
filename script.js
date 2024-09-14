// Smooth scroll when clicking on navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

                        //   Menu Section 

let currentSlide = 0;

function moveSlides(n) {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

                          //About us
document.querySelectorAll('.food-img').forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.filter = 'brightness(1.1)';
    });
    image.addEventListener('mouseleave', () => {
      image.style.filter = 'brightness(1)';
    });
  });

                         //   Contact US 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
                      // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    alert('Message sent successfully!');
  });
  

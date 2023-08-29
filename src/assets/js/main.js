//  Carousel Controller
const carousel = document.querySelector('.carousel');
const images = carousel ? carousel.querySelectorAll('img') : [];
const totalSlides = images.length;
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function moveCarousel() {
  if (carousel) {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function setActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  moveCarousel();
  setActiveDot();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  moveCarousel();
  setActiveDot();
}

if (prevButton && nextButton) {
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    moveCarousel();
    setActiveDot();
  });
});

setActiveDot();

if (carousel) {
  setInterval(() => {
    nextSlide();
  }, 8000);
}
// End Of Carousel Controller


// Sub menu controller
const toggleSubmenuButtons = document.querySelectorAll('.toggle-submenu');
const submenus = document.querySelectorAll('.submenu');

toggleSubmenuButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const submenu = button.parentElement.querySelector('.submenu');
    const isSubMenuOpen = submenu.classList.contains('open');

    submenus.forEach(openSubmenu => {
      if (openSubmenu !== submenu) {
        openSubmenu.classList.remove('open');
      }
    });

    submenu.classList.toggle('open', !isSubMenuOpen);

    event.stopPropagation();
  });
});
document.addEventListener('click', (event) => {
  submenus.forEach(submenu => {
    if (!submenu.contains(event.target)) {
      submenu.classList.remove('open');
    }
  });
});
// End of sub menu controller


// Toggle Controller

  const toggleButton = document.querySelector('.toggle-button');
  const menuList = document.querySelector('.menu-list');

  toggleButton.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
  });

// End of toggle controller


// Scroll To Top Button
const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// End Of Scroll To Top

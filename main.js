// Fade-up scroll animation
const fadeElements = document.querySelectorAll('.fade-up');
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  fadeElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add('visible');
  });
};
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Testimonials slider
let currentSlide = 0;
const slides = document.getElementById("testimonialSlides");
const totalSlides = slides.children.length;
function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function nextTestimonial() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}
setInterval(nextTestimonial, 5000);

// Loader fade out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("opacity-0");
    setTimeout(() => loader.style.display = "none", 500);
  }
});

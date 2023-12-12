// testimonios.js
let index = 0;
const testimonialsContainer = document.querySelector(".testimonial-container");

function nextTestimonial() {
  index = (index + 1) % testimonialsContainer.children.length;
  updateTestimonialPosition();
}

function prevTestimonial() {
  index = (index - 1 + testimonialsContainer.children.length) % testimonialsContainer.children.length;
  updateTestimonialPosition();
}

function updateTestimonialPosition() {
  testimonialsContainer.style.transform = `translateX(${-index * 300}px)`;
}
